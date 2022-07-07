import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Fragment, ReactNode, useEffect } from 'react';
import { useCart } from '../../hooks/useCart';
import { ICart } from '../../interfaces/Cart';
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
            <TableCell align="right">Total Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carts.slice(0, 7).map((cart) => (
            <TableRow key={cart.id}>
              <TableCell>{cart.id}</TableCell>
              <TableCell>{cart.user.username}</TableCell>
              <TableCell>
                {cart.cartProducts.map((item) => `${item.product.name}, `)}
              </TableCell>
              <TableCell>{cart.cartStatus}</TableCell>
              <TableCell align="right">{`R$${cart.total}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" sx={{ mt: 3 }}>
        See more orders
      </Link>
    </Fragment>
  );
}