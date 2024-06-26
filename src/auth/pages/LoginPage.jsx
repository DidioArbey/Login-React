import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayaout } from '../layout/AuthLayaout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks'
import { useMemo } from 'react'


export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'mimail@mail.com',
    password: '123456'
  });

  const isAuthenticating = useMemo( ()=> status === 'cheking', [status] );

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log({ email, password });
    dispatch(startLoginWithEmailPassword({ email, password }));
  }

  const onGoogleSingIn = () => {
    console.log('onGoogleSingIn')
    dispatch(startGoogleSignIn());


  }


  return (
    <AuthLayaout title='Login'>
      <form onSubmit={onSubmit} >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@ejemplo.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid
            container
            display={ !!errorMessage ? '' : 'none'}
            sx={{mt:1}}
          >
            <Grid
              item
              xs={12}
            >
              <Alert security='error'> { errorMessage } </Alert>
            </Grid>
          </Grid>



          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6} >
              <Button
                disabled = {isAuthenticating}
                type='submit'
                variant='contained'
                fullWidth
                >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Button
                disabled = {isAuthenticating}
                variant='contained'
                fullWidth
                onClick={onGoogleSingIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }} >Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register" >
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
      </form>

    </AuthLayaout>

  )
}
