import { Button, Grid, Typography, Box, Tabs, Tab } from '@mui/material';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { url } from '../../../App';
import { theme } from '../../../app.styled';
import { MainContainer } from '../../../components/main/main.styled'
import { useFetch } from '../../../hooks/useFetch';
import { IProduct } from '../../../interfaces/Product'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoProduct from './InfoProduct';

const ProductPage = () => {
  const [product, setProduct] = useState<IProduct>();
  const { id } = useParams();
  const { data, loading, error } = useFetch(`${url}/product/${id}`)

  useEffect(() => {
    setProduct(data)
  }, [data])

  return (
    <MainContainer>
      <Grid container spacing={4} bgcolor={theme.palette.background.default}
        sx={{
          marginTop: "10px",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          maxWidth: "1280px"
        }}>
        <Grid item xs={12}
          sx={{ display: "flex", justifyContent: "center" }}>
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
            justifyContent: "center",
            flexDirection: "column"
          }}>
          <Typography variant='body1'>Desc: Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. </Typography>
          <Box sx={{
            marginTop: "40px",
            marginBottom: "120px",
            display: "flex",
            justifyContent: "space-around",
          }}>
            <Typography variant='h4' color={theme.palette.primary.main}>
              R$ {product?.price}
            </Typography>
            <Button variant="contained" endIcon={<ShoppingCartIcon />}>
              Comprar
            </Button>
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