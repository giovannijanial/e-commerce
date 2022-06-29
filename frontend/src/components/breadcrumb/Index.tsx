import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

interface Props {
  product?: string;
}

export default function BreadCrumb({ product }: Props) {
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
    <Typography key="3" color="text.primary">
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