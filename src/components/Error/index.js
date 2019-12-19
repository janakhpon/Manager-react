import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 800,
    marginTop: 5,
  },
});

export default function PageError() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        ERROR. 404/502/403
      </Typography>
      <Typography variant="h6" gutterBottom>
        Oops! Sorry
      </Typography>
      <Typography variant="body1" gutterBottom>
        We have a few issues here, may be you are not authorized or tryin to make bad request that are not supposed to do!
      </Typography>
    </div>
  );
}
