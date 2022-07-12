import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { IUser } from '../../../../interfaces/User';

interface Props {
  dialog: boolean,
  onClose: any,
  currentUser?: IUser,
}

export default function DialogDetailsUser({ dialog, onClose, currentUser }: Props) {

  console.log(currentUser)
  return (
    <Box>
      <Dialog open={dialog} onClose={onClose} fullWidth maxWidth="lg">
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={6}>
              <TextField
                name="firstName"
                fullWidth
                id="firstName"
                label="First Name"
                InputProps={{
                  readOnly: true,
                }}
                value={currentUser?.firstName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="lastName"
                fullWidth
                id="lastBame"
                label="Last Name"
                InputProps={{
                  readOnly: true,
                }}
                value={currentUser?.lastName}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                name="email"
                fullWidth
                id="email"
                label="Email"
                InputProps={{
                  readOnly: true,
                }}
                value={currentUser?.email}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="username"
                fullWidth
                id="username"
                label="Username"
                InputProps={{
                  readOnly: true,
                }}
                value={currentUser?.username}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="age"
                fullWidth
                id="age"
                label="Age"
                InputProps={{
                  readOnly: true,
                }}
                value={currentUser?.age}
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                name="role"
                fullWidth
                id="role"
                label="Role"
                InputProps={{
                  readOnly: true,
                }}
                value={currentUser?.role}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                name="quantityPurchases"
                fullWidth
                id="name"
                label="Quantity Purchases"
                InputProps={{
                  readOnly: true,
                }}
                value={currentUser?.carts?.length}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                name="createdAt"
                fullWidth
                id="createdAt"
                label="Created At"
                InputProps={{
                  readOnly: true,
                }}
                value={currentUser?.createdAt}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                name="updatedAt"
                fullWidth
                id="updatedAt"
                label="Updated At"
                InputProps={{
                  readOnly: true,
                }}
                value={currentUser?.updateAt}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
