import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Autocomplete, Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { useUser } from '../../../../hooks/useUser';
import { ICart } from '../../../../interfaces/Cart';
import { IUser } from '../../../../interfaces/User';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
interface Props {
  dialog: boolean,
  setOpenDialogUpdate: any,
  currentCart?: ICart,
}

export default function DialogUpdateCart({ dialog, setOpenDialogUpdate, currentCart }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [role, setRole] = useState<string | null>("");
  const [password, setpassword] = useState("");

  const { update, loading } = useUser();

  useEffect(() => {
    if (currentUser) {
      setFirstName(currentUser?.firstName)
      setLastName(currentUser?.lastName)
      setUsername(currentUser?.username)
      setEmail(currentUser?.email)
      setRole(currentUser?.role)
      setAge(currentUser?.age)
    }
  }, [dialog])

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updateUser: IUser = {
      firstName,
      lastName,
      username,
      email,
      age,
      role
    }

    if (currentUser?.id) {
      await update(currentUser?.id, updateUser);
      setOpenDialogUpdate(false)
    }

  }, [update, firstName, lastName, username, email, age, role]);

  const handleCloseDialogUpdate = () => {
    setOpenDialogUpdate(false);
  };

  return (
    <Box>
      <Dialog open={dialog} onClose={setOpenDialogUpdate} fullWidth maxWidth="lg">
        <DialogTitle>User Update</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={6}>
                <TextField
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="lastName"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  value={lastName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="email"
                  fullWidth
                  id="email"
                  label="Email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="username"
                  fullWidth
                  id="username"
                  label="Username"
                  value={username}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  name="age"
                  fullWidth
                  id="age"
                  label="Age"
                  value={age}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(parseInt(e.target.value))}
                />
              </Grid>
              <Grid item xs={9}>
                <Autocomplete
                  disablePortal
                  id="role"
                  options={["admin", "user"]}
                  fullWidth
                  renderInput={(params) => <TextField {...params} label="Role" />}
                  value={role}
                  onChange={(e, value) => setRole(value)}
                />
              </Grid>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
            <Box sx={{ display: "flex", justifyContent: "space-around", width: "150px", mt: 2, alignSelf: "flex-end" }}>
              <Button onClick={handleCloseDialogUpdate}>Cancel</Button>
              {!loading ? (
                <Button type='submit'>Save</Button>
              ) : (
                <Button disabled={true}>Wait...</Button>
              )}
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box >
  );
}
