import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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

export default function PageLanding() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="Time.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h1" align="center">
            MANAGE YOUR TIME EFFECTIVELY!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align="center">
            Time is the most important thing in life, some lift their lives to the heighest just by manage their time EFFECTIVELY and some fall down to the bottom cuz the failed to manage it!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
