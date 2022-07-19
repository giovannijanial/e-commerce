import { Grid, Pagination, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ListCategories from '../../components/homeContainer/main/ListCategories'
import { MainContainer } from '../../components/main/main.styled'
import { useCategory } from '../../hooks/useCategory'
import { useProduct } from '../../hooks/useProduct'
import BoxProducts from './boxProducts'

const ProductsPage = () => {
  const { getAll: getAllCategories, categories } = useCategory();
  const { getAll: getAllProducts, getByCategory, products, loading, error, pagination } = useProduct();
  const { category } = useParams();

  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories])

  useEffect(() => {
    category ? getByCategory(category) : getAllProducts(page);
  }, [getAllProducts, getByCategory, category, page])

  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  return (
    <MainContainer container spacing={{ xs: 4 }} >
      <Grid item xs={12} >
        <Typography variant="h3" component="h4">
          Products
        </Typography>
      </Grid>
      <Grid item xs={3} display={{ xs: "none", sm: "none", md: "block" }}>
        <ListCategories categories={categories} />
      </Grid>
      <Grid item xs={9}>
        <BoxProducts products={products} loading={loading} />
      </Grid>
      <Grid item>
        <Pagination onChange={handlePage} count={pagination?.totalPages} size="large" variant='outlined' color='primary' />
      </Grid>
    </MainContainer >
  )
}

export default ProductsPage