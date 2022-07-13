import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { theme } from '../../app.styled';
import { useCart } from '../../hooks/useCart';
import Title from './Title';

export default function DashOrders() {
  const { getAll, carts, loading, error } = useCart();

  useEffect(() => {
    getAll()
  }, [getAll])


  return (
    <Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Products</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carts.slice(0, 7).map((cart) => (
            <TableRow key={cart.id}>
              <TableCell>{cart.id}</TableCell>
              <TableCell>{cart?.user?.username}</TableCell>
              <TableCell>
                {cart.cartProducts.map((item) => `${item.product.name}, `)}
              </TableCell>
              <TableCell>{cart.cartStatus}</TableCell>
              <TableCell align="right">{`R$${(cart.total).toFixed(2)}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <NavLink to="/dash/orders" style={{ marginTop: "20px" }}>
        <Typography sx={{ color: theme.palette.primary.main, textDecoration: "underline" }}>See all orders</Typography>
      </NavLink>
    </Fragment>
  );
}