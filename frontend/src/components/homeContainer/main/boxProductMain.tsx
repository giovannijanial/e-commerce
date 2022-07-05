import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { theme } from "../../../app.styled"
import { IProduct } from "../../../interfaces/Product"
import FavoriteRating from "../../productCard/Rating"
import { SProductBoxMain } from "./boxMain.styled"

const ProductBoxMain = ({ product }: { product: IProduct }) => {
  return (
    <Card>
      <CardActionArea component={Link} to={`/products/${product.id}`}>
        <CardMedia
          component="img"
          height="100%"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="image"
        />
        <CardContent sx={{
          display: "flex", flexFlow: "row wrap", justifyContent: "space-between"
        }}>
          < Typography gutterBottom variant="h6" component="div" >
            {product.name}
          </Typography>
          <FavoriteRating />
          <Typography
            gutterBottom variant="h6"
            component="div"
            color={theme.palette.primary.main}>
            R$ {product.price}
          </Typography>
        </CardContent>
      </CardActionArea >
    </Card >
  )
}

export default ProductBoxMain