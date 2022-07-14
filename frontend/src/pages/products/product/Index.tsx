import { Box, Button, Divider, Grid, Typography } from '@mui/material';
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

  const getPriceWithoutPromo = (): number => {
    if (product?.price)
      return parseFloat(((product?.price * 0.15) + product?.price).toFixed(2));
    return 0;
  }

  const getInstallments = (): number => {
    const priceWithoutPromo = getPriceWithoutPromo();
    return parseFloat((priceWithoutPromo / 10).toFixed(2));
  }

  return (
    <MainContainer sx={{ flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ alignSelf: "flex-start" }}>
        <BreadCrumb category={product?.categories[0].name} product={product?.name} />
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
          sx={{ display: "flex", justifyContent: "flex-start" }}>
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
            flexDirection: "column",
          }}>
          <Typography variant='body1'>Desc: Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. </Typography>
          <FavoriteRating />
          <Box sx={{
            marginTop: "40px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <Box>
              <Typography variant='h3' color={theme.palette.primary.main}>
                <b>R$ {(product?.price)?.toFixed(2)}</b>
              </Typography>
              <Typography variant='body1'>À vista no PIX com até <b>15% OFF</b>.</Typography>
            </Box>
            <Button variant="contained" endIcon={<ShoppingCartIcon />} sx={{ width: 250, height: 60, fontSize: "1.2em" }}>
              <b>Comprar</b>
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant='body1'>
              <b>R$ {getPriceWithoutPromo()}</b>
            </Typography>
            <Typography variant='body1'>
              Em até 10x de <b>R${getInstallments()}</b> sem juros no cartão
            </Typography>
            <Typography variant='body1'>
              Ou em 1x no cartão com até 10% OFF
            </Typography>
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