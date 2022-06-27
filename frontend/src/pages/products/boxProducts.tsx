import { Box } from "@mui/system";
import { useEffect, useState } from 'react';
import { url } from '../../App';
import { useFetch } from '../../hooks/useFetch';
import { IProduct } from '../../interfaces/Product';
import BoxProduct from './boxProduct';
import ReactLoading from 'react-loading';

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
      {loading && (<ReactLoading type={'spin'} color={'red'} height={60} width={60} />)}
      {error && (<p>{error.message}</p>)}
      {showProducts()}
    </Box>
  )
}

export default BoxProducts