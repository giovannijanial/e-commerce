import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from 'react';
import { url } from '../../App';
import ProductCard from "../../components/productCard/Index";
import { useFetch } from '../../hooks/useFetch';
import { IProduct } from '../../interfaces/Product';

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
        <ProductCard key={product.id} product={product} />
      </Box>
    ))
  }

  return (
    <Box sx={{
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      gap: "20px",
    }}>
      {loading && (<CircularProgress color="primary" />)}
      {error && (<p>{error.message}</p>)}
      {showProducts()}
    </Box>
  )
}

export default BoxProducts