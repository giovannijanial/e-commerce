import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { theme } from '../../app.styled';
import { IProduct } from '../../interfaces/Product';
import FavoriteRating from './Rating';

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="250"
          height="180"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
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
        <IconButton color='primary' aria-label="add to shopping cart" size='small'>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>

    </Card >

  )
}

export default ProductCard