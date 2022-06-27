import { Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { IProduct } from '../../../interfaces/Product';
import ProductItem from '../BoxProduct';
import { StyledOthers } from './index.styled'
import { useFetch } from '../../../hooks/useFetch';
import { url } from '../../../App';
import ReactLoading from 'react-loading';

const HomeOthers = () => {
  const [products, setProducts] = useState<IProduct[] | any>(null);

  const { data, loading, error, httpConfig } = useFetch(`${url}/product`);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data])

  function showOthersProducts() {
    return products && products.slice(13, 22).map((product: IProduct) => (
      <ProductItem key={product.id} product={product} />
    ))
  }
  return (
    <StyledOthers container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item md={12}>
        <Typography variant="h2" component="h4">
          Others
        </Typography>
      </Grid>
      {loading && (<ReactLoading type={'spin'} color={'red'} height={60} width={60} />)}
      {error && (<p>{error.message}</p>)}
      {showOthersProducts()}
    </StyledOthers>
  )
}

export default HomeOthers