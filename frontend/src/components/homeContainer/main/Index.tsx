import { Grid } from '@mui/material'
import { useEffect } from 'react'
import { useCategory } from '../../../hooks/useCategory'
import { useProduct } from '../../../hooks/useProduct'
import BoxMain from './BoxMain'
import ListCategories from './ListCategories'

const HomeMain = () => {
  const { getAll: getAllProducts, products, loading, error } = useProduct();
  const { getAll: getAllCategories, categories } = useCategory();

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts])

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories])

  return (
    <Grid container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item md={3} display={{ sm: "none", md: "block", xs: "none" }}>
        <ListCategories categories={categories} />
      </Grid>
      <Grid item md={5} sm={8} xs={12}>
        <BoxMain products={products} loading={loading} error={error} locale={"left"} />
      </Grid>
      <Grid item md={4} sm={8} xs={12}>
        <BoxMain products={products} loading={loading} error={error} locale={"right"} />
      </Grid>
    </Grid>
  )
}

export default HomeMain