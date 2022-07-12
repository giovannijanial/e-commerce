import { Box, Container, Fab, Toolbar } from '@mui/material'
import TableProducts from './TableUsers'
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from 'react-router-dom';

const DashUserPage = () => {
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
        <TableProducts />
        <Box sx={{
          mt: 3,
          alignSelf: "flex-end"
        }}>
          <NavLink to='/dash/users/add'>
            <Fab color="primary" aria-label="add" variant="extended">
              <AddIcon />
              Add User
            </Fab>
          </NavLink>
        </Box>
      </Container>
    </Box>
  )
}

export default DashUserPage