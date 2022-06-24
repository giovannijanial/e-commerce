import { Grid } from '@mui/material'
import BoxMid from './BoxMid'
import BoxRight from './BoxRigth'
import ListCategories from './ListCategories'

const HomeMain = () => {
  return (
    <Grid container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item md={3} display={{ sm: "none", md: "block", xs: "none" }}>
        <ListCategories />
      </Grid>
      <Grid item md={5} sm={8} xs={12}>
        <BoxMid />
      </Grid>
      <Grid item md={4} sm={8} xs={12}>
        <BoxRight />
      </Grid>
    </Grid>
  )
}

export default HomeMain