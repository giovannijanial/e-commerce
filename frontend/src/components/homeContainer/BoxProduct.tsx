import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { theme } from '../../app.styled';
import { IProduct } from '../../interfaces/Product';
import FavoriteRating from '../productCard/Rating';

const ProductItemCard = ({ product }: { product: IProduct }) => {
  return (
    <Grid item md={4} sm={8} xs={12}>
      <Card sx={{ maxHeight: 650 }}>
        <CardActionArea component={Link} to={`/products/${product.id}`}>
          <CardMedia
            component="img"
            height="350"
            image=""
            alt="image"
          />
          <CardContent>
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
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <FavoriteRating />
              <Typography
                gutterBottom variant="h5"
                component="div"
                color={theme.palette.primary.main}>
                R$ {product.price}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button fullWidth variant="contained" startIcon={<ShoppingCartIcon />}>
            Comprar
          </Button>
        </CardActions>
      </Card >
    </Grid >
  )
}

export default ProductItemCard