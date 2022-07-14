import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
import { capitalize } from '@mui/material';

interface Props {
  product?: string;
  category?: string;
}

export default function BreadCrumb({ product, category }: Props) {
  const breadcrumbs = [
    <Link key="1" color="inherit" to="/">
      Home
    </Link>,
    <Link
      key="2"
      color="inherit"
      to="/products"
    >
      Products
    </Link>,
    <Link
      key="3"
      color="inherit"
      to={`/products/category/${category}`}
    >
      {category}
    </Link >,
    <Typography key="4" color="text.primary">
      {product}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}