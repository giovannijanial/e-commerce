import { useEffect } from "react"
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { theme } from "../../../app.styled"
import { useProduct } from "../../../hooks/useProduct"
import { IProduct } from "../../../interfaces/Product"
import FavoriteRating from "../../productCard/Rating"

interface Props {
  product: IProduct,
  locale: string
}

const ProductBoxMain = ({ product, locale }: Props) => {

  const { getImage, image } = useProduct();

  useEffect(() => {
    if (product.image)
      getImage(product.image);
  }, [getImage])

  return (
    <Card>
      <CardActionArea
        component={Link}
        to={`/products/${product.id}`}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItemns: "center"
        }}>
        {locale === "right" ? (
          <CardMedia
            component="img"
            src={`data:image/jpeg;base64, ${image}`}
            alt="image"
            style={{
              width: "auto",
              maxHeight: "116px"
            }}
          />
        ) : (
          <CardMedia
            component="img"
            src={`data:image/jpeg;base64, ${image}`}
            alt="image"
            style={{
              width: "auto",
              maxHeight: "250px"
            }}
          />
        )}

        <CardContent sx={{
          alignSelf: "flex-start",
          display: "flex",
          flexFlow: "column",
          minWidth: "100%"
        }}>
          < Typography gutterBottom variant="h6" component="div" >
            {product.name}
          </Typography>
          <Box sx={{
            alignSelf: "center",
            display: "flex",
            justifyContent: "space-around",
            minWidth: "100%"
          }}>
            <FavoriteRating />
            <Typography
              gutterBottom variant="h6"
              component="div"
              color={theme.palette.primary.main}>
              R$ {product.price}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea >
    </Card >
  )
}

export default ProductBoxMain