import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks';
import { USER_LOGIN } from '../Queries';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const INITIAL_VALUES = {
  email: "",
  password: ""
}

const PageSignin = () => {
  const history = useHistory()
  const [values, setValues] = React.useState(INITIAL_VALUES)
  const [userLogin, { loading, error, data }] = useMutation(USER_LOGIN);
  const classes = useStyles();


  const handleChange = (e) => {

    e.persist();
    setValues(previousValues => ({
      ...previousValues, [e.target.name]: e.target.value
    }))

  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    let email = values.email
    let password = values.password

    
    
    try{
     const logg = await userLogin({ variables: { email, password } })
     localStorage.setItem('id', data.userLogin.user.id)
     localStorage.setItem('name', data.userLogin.user.name)
     localStorage.setItem('num', data.userLogin.user.tasks.length)
 
     history.push('/Page-tasks')
    }catch(err){


    }

      
  }



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          CREATE AN ACCOUNT
        </Typography>
        <form className={classes.form} noValidate>

          <TextField
            variant="outlined"
            margin="normal"
            onChange={handleChange}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            onChange={handleChange}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.submit}
          >
            SIGN IN
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default PageSignin;