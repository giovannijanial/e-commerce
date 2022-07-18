
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../app.styled';
import { useProduct } from '../../hooks/useProduct';
import { IProduct } from '../../interfaces/Product';
import BuyButton from '../buyButton/Index';
import FavoriteRating from './Rating';

const ProductCard = ({ product }: { product: IProduct }) => {

  const { getImage, image } = useProduct();

  useEffect(() => {
    if (product.image)
      getImage(product.image);
  }, [getImage])

  return (
    <>
      <Card sx={{ maxWidth: 290, minWidth: 290, minHeight: 400, maxHeight: 400 }}>
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
            style={{
              width: "auto",
              maxHeight: "200px"
            }}
            src={`data:image/jpeg;base64, ${image}`}
            alt="image"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div"
              sx={{
                overflow: "hidden",
                width: "268px",
                height: "32px"
              }}>
              {product.name}
            </Typography>
            <FavoriteRating />
            <Typography
              gutterBottom variant="h5"
              component="div"
              color={theme.palette.primary.main}>
              R$ {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <BuyButton origin="card" product={product} />
        </CardActions>
      </Card >
    </>
  )
}


export default ProductCard