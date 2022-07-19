import { CircularProgress, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { theme } from '../../../app.styled';
import { useProduct } from '../../../hooks/useProduct';
import { IProduct } from '../../../interfaces/Product';
import ProductItemCard from '../BoxProduct';
import { StyledOthers } from './index.styled';

const HomeOthers = () => {
  const { getAll, products, loading, error } = useProduct();

  useEffect(() => {
    getAll()
  }, [getAll])

  function showOthersProducts() {
    return products && products.slice(13, 22).map((product: IProduct) => (
      <ProductItemCard key={product.id} product={product} />
    ))
  }
  return (
    <StyledOthers container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ marginBottom: 20 }}>
      <Grid item md={12}>
        <Typography variant="h4" >
          <b>Top Produtos</b>
        </Typography>
        <Typography variant="body1" color={theme.palette.text.secondary}>
          Os produtos mais bem avaliados.
        </Typography>
      </Grid>
      {loading && (<CircularProgress color="primary" />)}
      {error && (<p>{error[0]}</p>)}
      {showOthersProducts()}
    </StyledOthers>
  )
}

export default HomeOthers