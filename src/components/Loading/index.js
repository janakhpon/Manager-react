import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    justifyContent: "center",
    alignSelf: "center"
  },
}));

export default function PageLoading() {
  const classes = useStyles();

  return <div className={classes.root}><h1>{" Loading ...... .... ... .."}</h1></div>;
}