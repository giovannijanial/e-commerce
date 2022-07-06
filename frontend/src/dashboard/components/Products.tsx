import { CircularProgress } from '@mui/material';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Fragment, useEffect } from 'react';
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
      {error && (<p>{error.message}</p>)}
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
          {products.slice(1, 7).map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell align="right">{`$${product.price}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" sx={{ mt: 3 }}>
        See more products
      </Link>
    </Fragment>
  )
}

export default DashProducts