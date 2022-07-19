import { CircularProgress, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { theme } from '../../../app.styled';
import { useProduct } from '../../../hooks/useProduct';
import { IProduct } from '../../../interfaces/Product';
import ProductItemCard from '../BoxProduct';
import { StyledTopSelling } from './index.styled';

interface Props {
  products: IProduct[],
  loading: boolean,
  error: string[],
}

const HomeTopSelling = ({ products, loading, error }: Props) => {

  function showTopProducts() {
    return products && products.slice(8, 11).map((product: IProduct) => (
      <ProductItemCard key={product.id} product={product} />
    ))
  }
  return (
    <StyledTopSelling container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item md={12}>
        <Typography variant="h4" >
          <b>Mais Vendidos</b>
        </Typography>
        <Typography variant="body1" color={theme.palette.text.secondary}>
          Os produtos mais vendidos da semana.
        </Typography>
      </Grid>
      {loading && (<CircularProgress color="primary" />)}
      {error && (<p>{error[0]}</p>)}
      {showTopProducts()}
    </StyledTopSelling>
  )
}

export default HomeTopSelling