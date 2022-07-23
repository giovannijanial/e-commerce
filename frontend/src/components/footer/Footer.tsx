import { Box, Divider, Grid, Link, Typography } from '@mui/material';
import { theme } from '../../app.styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {

  function Copyright() {
    return (
      <Typography variant="body2" color={theme.palette.background.default}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          ecommerce
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  function About() {
    return (
      <>
        <Typography variant="h5" color={theme.palette.background.default}>
          <b>E-commerce</b>
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography
            variant="body2"
            color={theme.palette.background.default}
            sx={{ fontSize: "0.9em" }}>
            App construído para fins educacionais.
            Produtos retirados do e-commerce da <b>Kabum!</b> todos os produtos e preços são reais!
          </Typography>
        </Box>
      </>

    );
  }

  function Contact() {
    return (
      <>
        <Typography variant="body1" color={theme.palette.background.default} >
          <b>Contato</b>
        </Typography>
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", alignItems: "center" }} color={theme.palette.background.default}>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.9em", display: "flex", alignItems: "center" }}>
            <GitHubIcon color="inherit" />
            /giovannijanial
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.9em", display: "flex", alignItems: "center" }}>
            <LinkedInIcon color="inherit" sx={{ mt: 1 }} />
            /giovannijanial
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.9em", display: "flex", alignItems: "center" }}>
            <InstagramIcon color="inherit" sx={{ mt: 1 }} />
            /giovannijanial
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.9em", display: "flex", alignItems: "center" }}>
            <TwitterIcon color="inherit" sx={{ mt: 1 }} />
            /giovannijanial
          </Typography>
        </Box>
      </>

    );
  }

  function MyAcount() {
    return (
      <>
        <Typography variant="body1" color={theme.palette.background.default} >
          <b>Minha Conta</b>
        </Typography>
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column" }} color={theme.palette.background.default}>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.9em" }}>
            Carrinho
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.9em" }}>
            Favoritos
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.9em" }}>
            Pedidos
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.9em" }}>
            Ajuda
          </Typography>
        </Box>
      </>

    );
  }

  return (
    <Box
      sx={{
        py: 3, px: 20,
        backgroundColor: theme.palette.primary.main,
        minHeight: "100%"
      }}
    >
      <Grid container sx={{ ml: 0, mt: 4, display: "flex", justifyContent: "space-around" }} spacing={4}>
        <Grid
          item
          xs={12} md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            px: 4
          }}>
          <About />
        </Grid>
        <Grid
          item xs={12} md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 4
          }}>
          <Contact />
        </Grid>
        <Grid
          item
          xs={12} md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignSelf: "flenx-end",
            px: 4
          }}>
          <MyAcount />
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Divider color={theme.palette.background.default} />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{

            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
          }}>
          <Copyright />
        </Grid>
      </Grid>
    </Box>

  )
}

export default Footer