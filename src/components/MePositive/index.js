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
import moment from 'moment'




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
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function PageMePostive({ data }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            {
                data.profiles.map((profile, key) => {
                    const age = moment(profile.birthdate, "MM/DD/YYYY").fromNow().split(" ")[0]
                    const noun = profile.gender === "male" ? "He" : "She"
                    return (
                        <>
                            <CardActionArea>
                                <CardContent>
                                    <div className={classes.image}>
                                        <Avatar alt={profile.author.name} src={profile.avatar} className={classes.bigAvatar} />
                                    </div>

                                    <Typography
                                        className={"MuiTypography--heading"}
                                        variant={"h6"}
                                        gutterBottom
                                    >
                                        {profile.author.name}
                                    </Typography>
                                    <Typography
                                        className={"MuiTypography--subheading"}
                                        variant={"caption"}
                                    >
                                        {profile.author.name} is a {age} years old {profile.career} and graduated from {profile.school}. {noun} lives in {profile.address} and interested in {profile.hobby}. Contact hime via {profile.author.email}.
                                     </Typography>

                                    <Typography
                                        className={"MuiTypography--subheading"}
                                        variant={"caption"}
                                    >
                                        His Status: "{profile.info}"
                                    </Typography>
                                    <Divider className={classes.margin} light />
                                    <Fab size="small" color="secondary" aria-label="update" className={classes.margin}>
                                        <EditIcon />
                                    </Fab>
                                    <Fab size="small" color="secondary" aria-label="delete" className={classes.margin}>
                                        <DeleteIcon />
                                    </Fab>
                                </CardContent>
                            </CardActionArea>

                        </>
                    )
                })
            }
        </Card>
    );
}