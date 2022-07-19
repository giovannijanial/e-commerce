import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import ProductCard from "../../components/productCard/Index";
import { useProduct } from "../../hooks/useProduct";
import { IProduct } from '../../interfaces/Product';

interface Props {
  products: IProduct[];
  loading: boolean;
}

const BoxProducts = ({ products, loading }: Props) => {
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
      {loading ? (
        <CircularProgress color="primary" />
      ) : (
        showProducts()
      )}

    </Box>
  )
}

export default BoxProducts