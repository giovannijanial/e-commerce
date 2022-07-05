import { CircularProgress, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { url } from '../../App';
import { MainContainer } from '../../components/main/main.styled';
import ProductCard from '../../components/productCard/Index';
import { useProduct } from '../../hooks/useProduct';
import { IProduct } from '../../interfaces/Product';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const urlSearch = url + "/product/?" + searchParams;

  const { getAll, products, loading, error } = useProduct();

  useEffect(() => {
    getAll()
  }, [getAll])

  function showResults() {
    return products && products.map((product: IProduct) => (
      <ProductCard key={product.id} product={product} />
    ))
  }

  return (
    <MainContainer>
      <Grid container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <Typography variant='h3'>Results:</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} sx={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          gap: "50px",
        }}>
          {loading && (<CircularProgress color="primary" />)}
          {error && (<p>{error.message}</p>)}
          {showResults()}
        </Grid>
      </Grid>
    </MainContainer >
  )
}

export default SearchPage