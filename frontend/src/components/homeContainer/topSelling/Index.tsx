import { CircularProgress, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useProduct } from '../../../hooks/useProduct';
import { IProduct } from '../../../interfaces/Product';
import ProductItemCard from '../BoxProduct';
import { StyledTopSelling } from './index.styled';

const HomeTopSelling = () => {
  const { getAll, products, loading, error } = useProduct();

  useEffect(() => {
    getAll()
  }, [getAll])

  function showTopProducts() {
    return products && products.slice(10, 13).map((product: IProduct) => (
      <ProductItemCard key={product.id} product={product} />
    ))
  }
  return (
    <StyledTopSelling container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item md={12}>
        <Typography variant="h2" component="h4">
          Top Sellings
        </Typography>
      </Grid>
      {loading && (<CircularProgress color="primary" />)}
      {error && (<p>{error.message}</p>)}
      {showTopProducts()}
    </StyledTopSelling>
  )
}

export default HomeTopSelling