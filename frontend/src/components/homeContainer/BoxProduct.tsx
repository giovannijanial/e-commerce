import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../app.styled';
import { useProduct } from '../../hooks/useProduct';
import { IProduct } from '../../interfaces/Product';
import BuyButton from '../buyButton/Index';
import FavoriteRating from '../productCard/Rating';

const ProductItemCard = ({ product }: { product: IProduct }) => {

  const { getImage, image } = useProduct();

  useEffect(() => {
    if (product.image)
      getImage(product.image);
  }, [getImage])

  return (
    <Grid item md={4} sm={8} xs={12}>
      <Card sx={{ maxHeight: 650 }}>
        <CardActionArea
          component={Link}
          to={`/products/${product.id}`}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItemns: "center"
          }}>
          <CardMedia
            component="img"
            alt="image"
            src={`data:image/jpeg;base64, ${image}`}
            style={{
              width: "auto",
              maxHeight: "350px"
            }}
          />
          <CardContent sx={{ alignSelf: "flex-start" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                overflow: "hidden",
                width: "268px",
                height: "62px"
              }}>
              {product.name}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignSelf: "flex-start" }}>
              <FavoriteRating />
              <Typography
                gutterBottom variant="h5"
                component="div"
                color={theme.palette.primary.main}>
                R$ {product.price.toFixed(2)}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <BuyButton origin="card" product={product} />
        </CardActions>
      </Card >
    </Grid >
  )
}

export default ProductItemCard