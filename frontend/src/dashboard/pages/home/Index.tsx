import { Box, Toolbar } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DashOrders from '../../components/Orders';
import DashProducts from '../../components/Products';
import DashRecentEntries from '../../components/RecentEntries';


const DashHomePage = () => {
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
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Top Products */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 340,
              }}
            >
              <DashProducts />
            </Paper>
          </Grid>
          {/* Orders Values */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <DashRecentEntries />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <DashOrders />
            </Paper>
          </Grid>
        </Grid>

      </Container>
    </Box>
  )
}

export default DashHomePage

