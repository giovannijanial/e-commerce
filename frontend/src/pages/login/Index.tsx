import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContainer } from '../../components/main/main.styled';
import AuthContext from '../../contexts/authProvider';
import axios from '../../api/axios';
import { url } from '../../App';

const LOGIN_URL = "http://localhost:3000/auth/login"

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [succes, setSucces] = useState(false);

  //const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    setErrorMessage("");
  }, [userName, password])


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const login = {
      username: userName,
      password
    }

    try {
      const res = await fetch(LOGIN_URL,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(login),
        },

      );
      const json = await res.json();

      console.log(JSON.stringify(json?.data))
      console.log(JSON.stringify(json))
      console.log(json?.data?.accessToken)
      console.log(json?.data?.roles)

      setUserName("");
      setPassword("");
      setSucces(true);
    } catch (error) {

    }


  };

  return (
    <MainContainer>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 2, bgcolor: 'secondary.main', width: 55, height: 55 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h3">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 10 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="UserName"
            name="userName"
            autoComplete="userName"
            autoFocus
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 4, mb: 3 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sign">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MainContainer>
  );
}