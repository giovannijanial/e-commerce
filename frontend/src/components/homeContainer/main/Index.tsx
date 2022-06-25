import { Grid } from '@mui/material'
import { url } from '../../../App'
import { useFetch } from '../../../hooks/useFetch'
import BoxMain from './BoxMain'
import ListCategories from './ListCategories'

const HomeMain = () => {
  const { data, loading, error, httpConfig } = useFetch(`${url}/product`);

  return (
    <Grid container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item md={3} display={{ sm: "none", md: "block", xs: "none" }}>
        <ListCategories />
      </Grid>
      <Grid item md={5} sm={8} xs={12}>
        <BoxMain httpConfig={httpConfig} data={data} loading={loading} error={error} locale={"left"} />
      </Grid>
      <Grid item md={4} sm={8} xs={12}>
        <BoxMain httpConfig={httpConfig} data={data} loading={loading} error={error} locale={"right"} />
      </Grid>
    </Grid>
  )
}

export default HomeMain