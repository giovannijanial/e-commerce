import AddIcon from '@mui/icons-material/Add';
import { Box, Container, Fab, Toolbar } from '@mui/material';
import { useState } from 'react';
import DialogCreateUser from './addUser/Index';
import TableProducts from './TableUsers';

const DashUserPage = () => {
  const [openDialogCreate, setOpenDialogCreate] = useState(false);

  const handleOpenDialogCreate = () => () => {
    setOpenDialogCreate(true);
  };

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
        <TableProducts dialogCreate={openDialogCreate} />
        <Box sx={{
          mt: 3,
          alignSelf: "flex-end"
        }}>
          <Fab
            color="primary"
            aria-label="add"
            variant="extended"
            onClick={handleOpenDialogCreate()}>
            <AddIcon />
            Add User
          </Fab>
        </Box>
      </Container>
      <DialogCreateUser
        dialog={openDialogCreate}
        setOpenDialogUpdate={setOpenDialogCreate} />
    </Box>
  )
}

export default DashUserPage