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
        height: "200px"
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: theme.palette.primary.main
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