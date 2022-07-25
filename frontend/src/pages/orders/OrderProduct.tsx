import { Avatar, Divider, Grid, Typography } from '@mui/material'
import { useEffect } from 'react';
import { useProduct } from '../../hooks/useProduct';
import { ICartItem } from '../../interfaces/Cart'

interface Props {
  cartProduct: ICartItem
}

const OrderProduct = ({ cartProduct }: Props) => {

  const { getImage, image } = useProduct();

  useEffect(() => {
    if (cartProduct.product.image)
      getImage(cartProduct.product.image);
  }, [getImage, image])

  return (
    <>
      <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Avatar variant="square" sx={{ width: 70, height: 70 }} src={`data:image/jpeg;base64, ${image}`} />
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
        <Typography>
          {cartProduct.product.name}
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography>
          {cartProduct.quantity}
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography>
          <b>{(cartProduct.price * cartProduct.quantity).toFixed(2)}</b>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </>
  )
}

export default OrderProduct