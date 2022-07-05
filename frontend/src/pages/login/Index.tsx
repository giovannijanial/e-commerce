import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MainContainer } from '../../components/main/main.styled';
import { useAuth } from '../../hooks/useAuth';
import { ILogin } from '../../interfaces/Auth';
import { LocationProps } from '../../interfaces/Location';

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { authLogin, errorMessage: ErrorM } = useAuth();

  const navigate = useNavigate();
  const location = useLocation() as unknown as LocationProps;

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    setErrorMessage("");
  }, [userName, password])


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const login: ILogin = {
      username: userName,
      password
    }

    await authLogin(login)
    console.log(ErrorM)

    setUserName("");
    setPassword("");
    navigate(from, { replace: true })

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
            error={!!errorMessage}
            helperText={errorMessage}
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
            error={!!errorMessage}
            helperText={errorMessage}
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