import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'
import Divider from "@material-ui/core/Divider";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 800,
        border: 0,
        textAlign: "center",
        overflow: "hidden",
    },
    bigAvatar: {
        width: 200,
        height: 200,
    },
    image: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function PageNoTask() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <div className={classes.image}>
                        <Typography variant="h3" gutterBottom>
                            No Task Found!
                  </Typography>
                    </div>

                    <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                    >
                        Sorry No task found, go create and manage your time
          </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}