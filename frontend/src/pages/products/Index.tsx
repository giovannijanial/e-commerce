import { Grid } from '@mui/material'
import ListCategories from '../../components/homeContainer/main/ListCategories'
import { MainContainer } from '../../components/main/main.styled'
import BoxProducts from './boxProducts'

const ProductsPage = () => {
  return (
    <MainContainer container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} >
      <h1>Products</h1>
      <Grid item xs={8}>
        <ListCategories />
      </Grid>
      <Grid item xs={8}>
        <BoxProducts />
      </Grid>
    </MainContainer >
  )
}

export default ProductsPage