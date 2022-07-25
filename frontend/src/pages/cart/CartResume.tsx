import { Button, CircularProgress, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { theme } from '../../app.styled'
import { ICart } from '../../interfaces/Cart'
import { useNavigate } from "react-router-dom";
import { useCart } from '../../hooks/useCart';
import FinishedCartDialog from '../../components/dialogs/FinishedCartDialog';
import { useState, useCallback, useContext } from 'react';
import CartContext from '../../contexts/cartProvider';
import { CartStatus } from '../../enums/CartStatus';

interface Props {
  currentCart: ICart;
  loading: boolean;
}

const CartResume = ({ currentCart, loading }: Props) => {
  const [openFinishedCart, setOpenFinishedCart] = useState(false);
  const [currentId, setCurrentId] = useState("");

  const { update } = useCart();
  const { logoutCart } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotalWithoutPromo = (): number => {
    if (currentCart?.total)
      return parseFloat(((currentCart?.total * 0.15) + currentCart?.total).toFixed(2));
    return 0;
  }

  const getInstallments = (): number => {
    const totalWithoutPromo = getTotalWithoutPromo();
    return parseFloat((totalWithoutPromo / 10).toFixed(2));
  }

  const handleOpenFinishedCart = (id: string | undefined) => () => {
    setOpenFinishedCart(true);
    if (id)
      setCurrentId(id)
  };

  const handleCloseFinishedCart = () => {
    setOpenFinishedCart(false);
  };

  const handleFinishCart = useCallback((cartId: string) => async () => {
    if (cartId) {
      await update(cartId, "payd");
      logoutCart();
      navigate("/");
    }
    setOpenFinishedCart(false);
  }, [update]);

  const handleBack = () => {
    navigate("/products")
  }

  return (
    <Grid container spacing={2} bgcolor={theme.palette.background.paper}
      sx={{
        marginTop: "10px",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "center",
        maxWidth: "1360px",
        paddingLeft: 0,
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"
      }}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant='h3'>Resumo</Typography>
      </Grid>
      {loading ? (
        <>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress color="primary" />
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={7}>
            <Typography variant='body1'>Valor dos Produtos:</Typography>
          </Grid>
          <Grid item xs={5} sx={{ display: "flex", justifyContent: "flex-end" }} >
            <Typography variant='body1'><b>R${getTotalWithoutPromo()}</b></Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant='body1'>Frete:</Typography>
          </Grid>
          <Grid item xs={5} sx={{ display: "flex", justifyContent: "flex-end" }} >
            <Typography variant='body1'><b>R$0.00</b></Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: "-10px" }}>
            <Divider />
          </Grid>
          <Grid item xs={7}>
            <Typography variant='body1'>Total à prazo:</Typography>
          </Grid>
          <Grid item xs={5} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end" }}>
            <Typography variant='body1'><b>R${getTotalWithoutPromo()}</b></Typography>
            <Typography variant='body2'>(em até 10x de R${getInstallments()})</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "center"
            }}>
            <Box
              bgcolor={theme.palette.success.main}
              sx={{
                width: 300,
                height: 100,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}>
              <Typography
                variant='h5'
                color={theme.palette.success.dark}>
                Valor no <b>PIX</b>
              </Typography>
              <Typography
                variant='h5'
                color={theme.palette.success.dark}>
                <b>R${currentCart.total.toFixed(2)}</b>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ height: 150, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
              <Button
                size='large'
                variant="contained"
                onClick={handleOpenFinishedCart(currentCart.id)}
                sx={{ height: 60 }}>
                <b>Ir para o Pagamento</b>
              </Button>
              <Button
                size='large'
                variant="outlined"
                sx={{ height: 60 }}
                onClick={(e) => handleBack()}
              >
                <b>Continuar Comprando</b>
              </Button>
            </Box>
          </Grid>
        </>
      )}
      <FinishedCartDialog
        dialog={openFinishedCart}
        onClose={handleCloseFinishedCart}
        onConfirm={handleFinishCart}
        id={currentId}
        loading={loading} />
    </Grid >
  )
}

export default CartResume