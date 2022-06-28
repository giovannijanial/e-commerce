import { CircularProgress, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { url } from '../../../App';
import { useFetch } from '../../../hooks/useFetch';
import { IProduct } from '../../../interfaces/Product';
import ProductItemCard from '../BoxProduct';
import { StyledTopSelling } from './index.styled';

const HomeTopSelling = () => {
  const [products, setProducts] = useState<IProduct[] | any>(null);

  const { data, loading, error, httpConfig } = useFetch(`${url}/product`);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data])

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