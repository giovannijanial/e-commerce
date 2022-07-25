import { Box, CircularProgress, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { MainContainer } from '../../components/main/main.styled';
import AuthContext from '../../contexts/authProvider';
import { useUser } from '../../hooks/useUser';
import Orders from './Orders';

export default function OrdersPage() {

  const { auth } = useContext(AuthContext);
  const { getOne, user, loading } = useUser();

  useEffect(() => {
    if (auth.user.id)
      getOne(auth.user.id);
  }, [getOne])

  const renderOrders = () => {

    return (
      <Box
        sx={{
          marginTop: "10px",
          padding: "10px 20px",
          display: "flex",
          flexDirection: "column",
          maxWidth: "1360px",
        }}
      >
        <Typography variant='h3' sx={{ mb: 3 }}>Meus Pedidos</Typography>
        {user?.carts && user.carts
          .sort((a, b) => a.cartStatus < b.cartStatus ? 1 : -1)
          .map((cart, index) => (
            <Orders key={cart.id} cart={cart} index={index} />
          ))}
      </Box>
    )
  }

  return (
    <MainContainer>
      {loading && (<CircularProgress />)}
      {renderOrders()}
    </MainContainer>
  );
}