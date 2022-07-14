import { Box, Button, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { theme } from '../../../app.styled';
import { MainContainer } from '../../../components/main/main.styled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BreadCrumb from '../../../components/breadcrumb/Index';
import FavoriteRating from '../../../components/productCard/Rating';
import { useProduct } from '../../../hooks/useProduct';
import InfoProduct from './InfoProduct';

const ProductPage = () => {
  const { id } = useParams();

  const { getOne, product } = useProduct();

  useEffect(() => {
    if (id) {
      getOne(+id)
    }
  }, [getOne])

  return (
    <MainContainer sx={{ flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ alignSelf: "flex-start" }}>
        <BreadCrumb product={product?.name} />
      </Box>
      <Grid container spacing={4} bgcolor={theme.palette.background.default}
        sx={{
          marginTop: "10px",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          maxWidth: "1360px"
        }}>
        <Grid item xs={12}
          sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant='h3'>
            {product?.name}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <p>image</p>
        </Grid>
        <Grid item xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}>
          <Typography variant='body1'>Desc: Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. </Typography>
          <FavoriteRating />
          <Box sx={{
            marginTop: "40px",
            marginBottom: "120px",
            display: "flex",
            justifyContent: "space-around",
          }}>
            <Typography variant='h4' color={theme.palette.primary.main}>
              R$ {product?.price}
            </Typography>
            <Button variant="contained" endIcon={<ShoppingCartIcon />}>
              Comprar
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <InfoProduct />
        </Grid>
      </Grid>
    </MainContainer >
  )
}

export default ProductPage