import { Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import { url } from '../../../App'
import { useFetch } from '../../../hooks/useFetch'
import { IProduct } from '../../../interfaces/Product'
import ProductItem from '../BoxProduct'
import { StyledNewProducts } from './index.styled'

const HomeNewProducts = () => {
  const [products, setProducts] = useState<IProduct[] | any>(null);

  const { data, loading, error, httpConfig } = useFetch(`${url}/product`);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data])

  function showNewProducts() {
    return products && products.slice(7, 10).map((product: IProduct) => (
      <ProductItem key={product.id} product={product} />
    ))
  }

  return (
    <StyledNewProducts container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item md={12}>
        <Typography variant="h2" component="h4">
          New Products
        </Typography>
      </Grid>
      {loading && (<ReactLoading type={'spin'} color={'red'} height={60} width={60} />)}
      {error && (<p>{error.message}</p>)}
      {showNewProducts()}
    </StyledNewProducts>
  )
}

export default HomeNewProducts