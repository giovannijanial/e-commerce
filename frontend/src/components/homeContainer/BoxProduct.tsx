import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { theme } from '../../app.styled';
import { IProduct } from '../../interfaces/Product';
import FavoriteRating from '../productCard/Rating';

const ProductItemCard = ({ product }: { product: IProduct }) => {
  return (
    <Grid item md={4} sm={8} xs={12}>
      <Card>
        <CardActionArea component={Link} to={`/products/${product.id}`}>
          <CardMedia
            component="img"
            height="350"
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
          <Button fullWidth variant="contained" startIcon={<ShoppingCartIcon />}>
            Comprar
          </Button>
        </CardActions>
      </Card >
    </Grid>
  )
}

export default ProductItemCard