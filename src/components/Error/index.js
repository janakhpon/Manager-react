import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
    perspective: '1000px',
    color: "#ffffff",
    backgroundColor: "#1d3557",
  },
  media: {
    height: '65vh',
  },
});

export default function PageError() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="404.jpg"
          title="Sorry! Oops!"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h1" align="center">
            Oops!!  sorry...
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align="center">
            May be your are not authorized for the route or something went wrong with the server!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
