import { CircularProgress, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { theme } from '../../app.styled';
import { useProduct } from '../../hooks/useProduct';
import Title from './Title';

const DashProducts = () => {

  const { getAll, products, loading, error } = useProduct();

  useEffect(() => {
    getAll()
  }, [getAll])

  return (
    <Fragment>
      {loading && (<CircularProgress color="primary" />)}
      {error && (<p>{error[0]}</p>)}
      <Title>Top Products</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.slice(0, 6).map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell align="right">{`R$${(product.price).toFixed(2)}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <NavLink to="/dash/products" style={{ marginTop: "20px" }}>
        <Typography sx={{ color: theme.palette.primary.main, textDecoration: "underline" }}>See all products</Typography>
      </NavLink>
    </Fragment>
  )
}

export default DashProducts