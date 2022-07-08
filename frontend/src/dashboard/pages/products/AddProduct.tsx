import { Box, Container, Toolbar, Typography } from '@mui/material'

const DashAddProductPage = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, display: "flex", flexDirection: "column" }}>
        <Typography variant="h2">ADD PRODUCT</Typography>
      </Container>
    </Box>
  )
}

export default DashAddProductPage