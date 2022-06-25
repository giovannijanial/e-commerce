import { Grid } from '@mui/material'
import { IProduct } from '../../interfaces/Product'
import { SProductBox } from './boxProduct.styled'

const ProductItem = ({ product }: { product: IProduct }) => {
  return (
    <Grid item md={4} sm={8} xs={12}>
      <SProductBox>
        <p>{product.id}</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </SProductBox>
    </Grid>
  )
}

export default ProductItem