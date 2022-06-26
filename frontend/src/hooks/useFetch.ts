import { useEffect, useState } from "react";
import { IHttpConfig } from "../interfaces/HttpConfig";

export function useFetch(url: string) {
	const [data, setData] = useState<any>();
	const [config, setConfig] = useState<RequestInit>({});
	const [callFetch, setCallFetch] = useState<Boolean>(false);
	const [loading, setLoading] = useState<Boolean>(false);
	const [error, setError] = useState<Error>();
	const [itemId, setItemId] = useState<Number | String>();

	const httpConfig: IHttpConfig = (data: any, method: string) => {
		if (method === "POST") {
			console.log(data);
			setConfig({
				method,
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(data),
			});
		}
		if (method === "DELETE") {
			setConfig({
				method,
			});
			setItemId(data);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			try {
				const res = await fetch(url);
				const json = await res.json();
				setData(json);
			} catch (e) {
				const error = e as Error;
				setError(error);
			}

			setLoading(false);
		};

		fetchData();
	}, [url, callFetch]);

	useEffect(() => {
		const fetchData = async () => {
			let json: any = null;
			if (config.method === "POST") {
				const res = await fetch(url, config);
				json = await res.json();
			}
			if (config.method === "DELETE") {
				const urlDelete = `${url}/${itemId}`;
				const res = await fetch(urlDelete, config);
				json = await res.json();
			}
			setCallFetch(json);
		};

		fetchData();
	}, [config]);

	return { data, httpConfig, loading, error };
}
