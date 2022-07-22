import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Avatar, Button, ButtonGroup, CircularProgress, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState, useEffect, useCallback, useContext } from 'react';
import { theme } from '../../app.styled';
import { useProduct } from '../../hooks/useProduct';
import { ICartItem } from "../../interfaces/Cart";
import DeleteIcon from '@mui/icons-material/Delete';
import DialogDelete from '../dialogs/DeleteDialog';
import { useCart } from '../../hooks/useCart';
import CartContext from '../../contexts/cartProvider';

interface Props {
  cartId: string | undefined;
  cartProduct: ICartItem;
}

const CartProduct = ({ cartId, cartProduct }: Props) => {
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [quantity, setQuantity] = useState<number>();
  const [currentId, setCurrentId] = useState(0);

  const { getImage, image } = useProduct();
  const { removeProduct, loading, updateCartProduct } = useCart();
  const { removeProduct: removeProductContext, increaseProduct, reduceProduct } = useContext(CartContext);

  const handleOpenDialogDelete = (id: number) => () => {
    setOpenDialogDelete(true);
    setCurrentId(id)
  };

  const handleCloseDialogDelete = () => {
    setOpenDialogDelete(false);
  };

  useEffect(() => {
    if (cartProduct.product.image)
      getImage(cartProduct.product.image);
  }, [getImage, image])

  useEffect(() => {
    setQuantity(cartProduct.quantity)
  }, [cartProduct])

  const handleReduce = useCallback(async () => {
    if (quantity && cartId && cartProduct.id && cartProduct.product.id) {
      setQuantity(quantity - 1)
      await updateCartProduct(cartId, cartProduct.id, quantity - 1);
      reduceProduct(cartProduct.product.id)
    }
  }, [quantity, updateCartProduct])

  const handleIncrease = useCallback(async () => {
    if (quantity && cartId && cartProduct.id && cartProduct.product.id) {
      setQuantity(quantity + 1)
      await updateCartProduct(cartId, cartProduct.id, quantity + 1);
      increaseProduct(cartProduct.product.id)
    }
  }, [quantity, updateCartProduct])

  const handleRemoveProduct = useCallback((idCartProduct: number) => async () => {
    if (cartId) {
      await removeProduct(cartId, idCartProduct);
      removeProductContext(idCartProduct);
    }
    setOpenDialogDelete(false);
  }, [removeProduct]);

  return (
    <>
      <Grid item xs={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Avatar variant="square" sx={{ width: 70, height: 70 }} src={`data:image/jpeg;base64, ${image}`} />
      </Grid>
      <Grid item xs={5} sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
        <Typography>{cartProduct.product.name}</Typography>
      </Grid>
      <Grid item xs={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {quantity && (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
            {loading ? (
              <CircularProgress color="primary" />
            ) : (
              <>
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
              </>
            )}
          </Box>
        )}
      </Grid>
      <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {quantity && (<Typography color={theme.palette.primary.main}><b>R${(quantity * cartProduct.price).toFixed(2)}</b></Typography>)}
      </Grid>
      <Grid item xs={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {cartProduct.id && (
          <Button color='secondary' onClick={handleOpenDialogDelete(cartProduct.id)}>
            <DeleteIcon />
          </Button>
        )}
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <DialogDelete
        dialog={openDialogDelete}
        onClose={handleCloseDialogDelete}
        onConfirm={handleRemoveProduct}
        id={currentId}
        loading={loading} />
    </>
  )
}

export default CartProduct