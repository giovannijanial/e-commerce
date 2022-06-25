import { Grid, Typography } from '@mui/material'
import ListCategories from '../../components/homeContainer/main/ListCategories'
import { MainContainer } from '../../components/main/main.styled'
import BoxProducts from './boxProducts'

const ProductsPage = () => {
  return (
    <MainContainer container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} >
      <Grid item xs={12} >
        <Typography variant="h3" component="h4">
          Products
        </Typography>
      </Grid>
      <Grid item xs={3} display={{ xs: "none", sm: "none", md: "block" }}>
        <ListCategories />
      </Grid>
      <Grid item xs={9}>
        <BoxProducts />
      </Grid>
    </MainContainer >
  )
}

export default ProductsPage