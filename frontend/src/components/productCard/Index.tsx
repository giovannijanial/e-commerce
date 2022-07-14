
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { theme } from '../../app.styled';
import { IProduct } from '../../interfaces/Product';
import FavoriteRating from './Rating';

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Card sx={{ maxWidth: 290, minWidth: 290, minHeight: 400, maxHeight: 400 }}>
      <CardActionArea component={Link} to={`/products/${product.id}`}>
        <CardMedia
          component="img"
          width="250"
          height="200"
          image=""
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
        <Button fullWidth variant="contained" startIcon={<ShoppingCartIcon />}>
          Comprar
        </Button>
      </CardActions>
    </Card >

  )
}

export default ProductCard