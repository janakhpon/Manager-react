import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Backdrop from '@material-ui/core/Backdrop';
import { amber, green } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER } from '../Queries';

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
    color: "#ffffff",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: "#ffffff",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  notibox: {
    color: "#ffffff",
    backgroundColor: "#20bf55",
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const INITIAL_VALUES = {
  name: "",
  email: "",
  phone: "",
  password: ""
}

const PageSignup = () => {
  const history = useHistory()
  const [values, setValues] = React.useState(INITIAL_VALUES)
  const [open, setOpen] = React.useState(true);
  const [createUser, { loading, data, error }] = useMutation(CREATE_USER);
  const classes = useStyles();
  const handleChange = (e) => {
    e.persist();
    setValues(previousValues => ({
      ...previousValues, [e.target.name]: e.target.value
    }))
  }

  const onClose = () => {
    setOpen(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = values.name
    let email = values.email
    let phone = values.phone
    let password = values.password
    try {
      await createUser({ variables: { name, email, phone, password } })
    } catch (err) {
      setOpen(true)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      {
        loading ? (
          <Backdrop
            className={classes.backdrop}
            open={true}
          >
            <CircularProgress color="secondary" />
          </Backdrop>
        ) : ('')
      }
      {
        error ? (
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={open}
            onClose={onClose}
            autoHideDuration={2000}
          >
            <SnackbarContent
              className={classes.notibox}
              aria-describedby="client-snackbar"
              message={
                <span id="client-snackbar" className={classes.message}>
                  {error.graphQLErrors.map(x => x.message)}
                </span>
              }
              action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                  <CloseIcon className={classes.icon} />
                </IconButton>,
              ]}
            />
          </Snackbar>
        ) : ('')
      }
      {
        data ? (
          history.push('/Page-signin')
        ) : ('')
      }
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
            id="name"
            label="Your name"
            name="name"
            autoComplete="name"
            autoFocus
          />
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
            id="phone"
            label="Phone number"
            name="phone"
            autoComplete="name"
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
            SIGN UP
          </Button>
          <Grid container>
            <Grid item>
              <NavLink to={routes.SIGN_IN} variant="body2">
                {"Already have an account? Sign In"}
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default PageSignup;