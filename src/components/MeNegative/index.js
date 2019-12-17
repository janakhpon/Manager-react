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
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';




const useStyles = makeStyles(theme => ({
    card: {
        maxWidth:800,
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
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function PageMeNegative() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                    >
                        No Profile Found!
                    </Typography>
                    <Typography
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                    >
                        You don't have a profile yet! .. 
                 </Typography>
                   
                    
                </CardContent>
            </CardActionArea>
        </Card>
    );
}