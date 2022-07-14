import { Autocomplete, Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { useUser } from '../../../../hooks/useUser';
import { IUser } from '../../../../interfaces/User';

interface Props {
  dialog: boolean,
  setOpenDialogUpdate: any,
  currentUser?: IUser,
}

export default function DialogCreateUser({ dialog, setOpenDialogUpdate }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [role, setRole] = useState<string | null>("");
  const [password, setpassword] = useState("");

  const { create, loading } = useUser();

  useEffect(() => {

  }, [dialog])

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user: IUser = {
      firstName,
      lastName,
      username,
      email,
      age,
      role,
      password,
      carts: []
    }

    await create(user);
    setOpenDialogUpdate(false)

  }, [create, firstName, lastName, username, email, age, role, password]);

  const handleCloseDialogUpdate = () => {
    setFirstName("");
    setLastName("");
    setUsername("");
    setEmail("");
    setAge(0);
    setRole("");
    setpassword("");
    setOpenDialogUpdate(false);
  };

  return (
    <Box>
      <Dialog open={dialog} onClose={setOpenDialogUpdate} fullWidth maxWidth="lg">
        <DialogTitle>Create User</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={5}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  name="lastName"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  value={lastName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  name="age"
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  value={age}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(parseInt(e.target.value))}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  value={username}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <Autocomplete
                  aria-required
                  disablePortal
                  id="role"
                  options={["admin", "user"]}
                  fullWidth
                  renderInput={(params) => <TextField {...params} label="Role" />}
                  value={role}
                  onChange={(e, value) => setRole(value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setpassword(e.target.value)}
                  value={password}
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
