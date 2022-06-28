import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { theme } from '../../app.styled';
import { IProduct } from '../../interfaces/Product';
import FavoriteRating from '../productCard/Rating';

const ProductItemCard = ({ product }: { product: IProduct }) => {
  return (
    <Grid item md={4} sm={8} xs={12}>
      <Card>
        <CardActionArea>
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
          <IconButton color='primary' aria-label="add to shopping cart" size='small'>
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card >
    </Grid>
  )
}

export default ProductItemCard