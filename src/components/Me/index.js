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

export default function PageMe() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <div className={classes.image}>
                        <Avatar alt="Remy Sharp" src="https://janakhpon.github.io/img/profile.jpg" className={classes.bigAvatar} />
                    </div>

                    <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                    >
                        Nature Around Us
          </Typography>
                    <Typography
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                    >
                        We are going to learn different kinds of species in nature that live
                        together to form amazing environment.
          </Typography>
                    <Divider className={classes.divider} light />
                    <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
                        <AddIcon />
                    </Fab>
                    <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
                        <AddIcon />
                    </Fab>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}