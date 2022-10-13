import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Alert, 
  Snackbar, 
  CircularProgress, 
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Footer from '../init/Footer';
import { loginDto } from '../../types/auth';

const theme = createTheme();

interface stateType {
  from: { pathname: string }
}

export default function SignIn() {
  const [openAlert, setOpenAlert] = React.useState(false);
  const [data, setData] = React.useState<loginDto|null>(null);
  let navigate = useNavigate();
  let location = useLocation();

  React.useEffect(() => {
    if(data && data != null) {
      let state = location.state as stateType;
      if(state == null) {
        navigate('/', { replace: true });
      }
      else {
        let from = state.from?.pathname || '/';
        navigate(from, { replace: true });
      }
    }
  }, [data]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setOpenAlert(false);

    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const uu = data.get('username')?.toString();
    const uuu = uu === undefined ? '' : uu;
    const pp = data.get('password')?.toString();
    const ppp = pp === undefined ? '' : pp;

    //dispatch(action.login(uuu, ppp));
  };

  const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
    setOpenAlert(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
        >
          <Alert severity="error">{'error'}</Alert>
        </Snackbar>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          JST Admin
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Nombre de usuario"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
            />
            <Box sx={{ m: 1, position: 'relative' }}>
              <Button 
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={false}
              >
                Ingresar
              </Button>
              {false && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidó su contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  ¿No tiene una cuenta? Registrese
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}