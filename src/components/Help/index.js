import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    color: "#ffffff",
    backgroundColor: "#003459",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },

  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    color: "#ffffff",
    backgroundColor: "#003459",
  },
  seperator: {
    color: "#ffffff",
    backgroundColor: "#003459",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    boxShadow: 'none',
    border: theme.spacing(0),
    WebkitBoxShadow: 'none',
    outline: 'none',
  },
  card: {
    maxWidth: '100%',
    boxShadow: 0,
    border: theme.spacing(0),
    WebkitBoxShadow: 'none',
    outline: 'none',
    padding: theme.spacing(1, 1, 4, 1),
    color: "#ffffff",
    backgroundColor: "#003459",
  },

  expand: {
    color: "#ffffff",
    backgroundColor: "#003459",
  },
  media: {
    height: '60vh',
  },
}));

export default function AddressForm() {

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.card} border={0} m={2} p={2}>
          <Paper className={classes.paper}>

            <Typography variant="h2" align='center'>
              Way to get help!
            </Typography>

            <Grid container spacing={1} className={classes.expand}>

              <Grid item xs={12} spacing={3}>
                <TextField
                  id="email"
                  name="email"
                  label="Email here .."
                  fullWidth
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12} spacing={3}>
                <TextField
                  id="description"
                  name="description"
                  label="Describe your statement"
                  fullWidth
                  autoComplete="description"
                />
              </Grid>
              <Grid item xs={12} spacing={3}>
                <p>
                  {`  `}
                </p>
              </Grid>
              <Grid item xs={12} spacing={4}>
                <Button variant="contained" color="primary">
                  SEND
               </Button>

              </Grid>
            </Grid>
          </Paper>
        </div>
      </Container>
    </>
  );
}
