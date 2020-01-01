import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks';
import { USER_LOGIN } from '../Queries';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'


const NavLink = styled(Link)`
    text-decoration: none;
    outline: none;
    text-align: center;
    color: #ffffff;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        outline: none;
        color: #0984e3;
    }
`;


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
  const [userLogin] = useMutation(USER_LOGIN);
  const classes = useStyles();


  const handleChange = (e) => {

    e.persist();
    setValues(previousValues => ({
      ...previousValues, [e.target.name]: e.target.value
    }))

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let email = values.email
    let password = values.password



    try {
      const logg = await userLogin({ variables: { email, password } })
      localStorage.setItem('id', logg.data.userLogin.user.id)
      localStorage.setItem('name', logg.data.userLogin.user.name)
      localStorage.setItem('num', logg.data.userLogin.user.tasks.length)
      history.push('/Page-me')
    } catch (err) {


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
          UNLOCK YOUR ACCOUNT
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
            <Grid item alignItems="center">
              <NavLink to={routes.SIGN_UP} variant="body2" alignItems="center">
                {"Don't have an account? SIGN UP"}
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default PageSignin;