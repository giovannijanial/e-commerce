import { Box, Container, CssBaseline, Link, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../app.styled';

const Footer = () => {

  function Copyright() {
    return (
      <Typography variant="body2" color={theme.palette.background.default}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: "100px",
        marginTop: "20px"
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: theme.palette.primary.main,
          height: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" color={theme.palette.background.default}>
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box >
  )
}

export default Footer