import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MainContainer } from '../../components/main/main.styled'
import { useUser } from '../../hooks/useUser'
import { IUser } from '../../interfaces/User'


export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const { create, error, loading, success } = useUser();

  useEffect(() => {
    if (success) {
      setFirstName('');
      setLastName('');
      setUsername('');
      setEmail('');
      setAge(0);
      setpassword('');
      navigate("/login");
    }
  }, [success])

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user: IUser = {
      firstName,
      lastName,
      username,
      email,
      age,
      role: "user",
      password,
      carts: [],
    }
    create(user)

  }, [create, firstName, lastName, username, email, age, password]);

  return (
    <MainContainer>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: "1200px",
        }}
      >
        <Avatar sx={{ m: 2, bgcolor: 'secondary.main', width: 55, height: 55 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h3">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit}
          sx={{
            mt: 10, display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="First Name"
                autoFocus
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                value={firstName}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                value={lastName}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="age"
                type="number"
                label="Age"
                name="age"
                autoComplete="family-name"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(parseInt(e.target.value))}
                value={+age}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                value={email}
                error={error.includes("email must be an email")}
                helperText={error[0]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="user-name"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                value={username}
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
                error={error.includes("password should not be empty")}
                helperText={error[1]}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, width: 600 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MainContainer>
  );
}