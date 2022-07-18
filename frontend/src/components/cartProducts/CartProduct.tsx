import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Avatar, Button, ButtonGroup, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import { theme } from '../../app.styled';
import { useProduct } from '../../hooks/useProduct';
import { ICartItem } from "../../interfaces/Cart";

interface Props {
  cartProduct: ICartItem
}

const CartProduct = ({ cartProduct }: Props) => {
  const [quantity, setQuantity] = useState<number>();

  const { getImage, image } = useProduct();

  useEffect(() => {
    if (cartProduct.product.image)
      getImage(cartProduct.product.image);
  }, [getImage, image])

  useEffect(() => {
    setQuantity(cartProduct.quantity)
  }, [cartProduct])

  const handleReduce = () => {
    if (quantity)
      setQuantity(quantity - 1)
  }

  const handleIncrease = () => {
    if (quantity)
      setQuantity(quantity + 1)
  }

  return (
    <>
      <Grid item xs={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Avatar variant="square" sx={{ width: 70, height: 70 }} src={`data:image/jpeg;base64, ${image}`} />
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
        <Typography>{cartProduct.product.name}</Typography>
      </Grid>
      <Grid item xs={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {quantity && (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
            <Typography sx={{ mb: 1 }}>{quantity}</Typography>
            <ButtonGroup>
              {quantity > 1 ? (<Button
                aria-label="reduce"
                size='small'
                onClick={(e) => handleReduce()}
              >
                <RemoveIcon fontSize="small" />
              </Button>) : (
                <Button
                  disabled
                  aria-label="reduce"
                  size='small'
                  onClick={(e) => handleReduce()}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
              )}

              <Button
                aria-label="increase"
                size='small'
                onClick={(e) => handleIncrease()}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Box>
        )}
      </Grid>
      <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {quantity && (<Typography color={theme.palette.primary.main}><b>R${(quantity * cartProduct.price).toFixed(2)}</b></Typography>)}
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </>
  )
}

export default CartProduct