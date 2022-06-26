import { useEffect, useState } from 'react';
import { url } from '../../App';
import { useFetch } from '../../hooks/useFetch';
import { IProduct } from '../../interfaces/Product';
import BoxProduct from './boxProduct';
import { Box } from "@mui/system";

const BoxProducts = () => {
  const [products, setProducts] = useState<IProduct[] | any>(null);

  const { data, loading, error, httpConfig } = useFetch(`${url}/product`);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data])

  function showProducts() {
    return products && products.slice(0, 15).map((product: IProduct) => (
      <Box>
        <BoxProduct key={product.id} product={product} />
      </Box>
    ))
  }

  return (
    <Box sx={{
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      gap: "10px",
    }}>
      {loading && (<p>Loading...</p>)}
      {error && (<p>{error.message}</p>)}
      {showProducts()}
    </Box>
  )
}

export default BoxProducts