import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    marginTop: theme.spacing(2),
  },
  bigAvatar: {
    width: 100,
    height: 100,
  },
  [theme.breakpoints.up('md')]: {
    width: 80,
    height: 80,
  },
  [theme.breakpoints.down('sm')]: {
    bigAvatar: {
      width: 30,
      height: 30,
    },
  },
}));

export default function ImageAvatars(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt={props.alt} src={props.img} className={classes.bigAvatar} />
    </div>
  );
}