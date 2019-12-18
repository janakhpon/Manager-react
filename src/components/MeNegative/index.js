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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_TASK } from "../Queries";




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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function PageMeNegative() {
    const [open, setOpen] = React.useState(false)
    const [age, setAge] = React.useState('');
    const [bopen, setBopen] = React.useState(false);
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = event => {
        setAge(event.target.value);
    };

    const handleBclose = () => {
        setOpen(false);
    };

    const handleBopen = () => {
        setOpen(true);
    };

    return (
        <Card className={classes.card}>

            <CardActionArea>
                <CardContent>
                    <div className={classes.image}>
                        <Avatar alt="Unknown" src="https://img.pngio.com/question-mark-png-5a381257a892436425987715136241516905-1-savory-png-for-question-mark-900_1020.jpg" className={classes.bigAvatar} />
                    </div>

                    <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                    >
                        Not Found!
                    </Typography>
                    <Typography
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                    >
                        Seem like you dont have a profile and information to display here yet! . Please Create one
             </Typography>

                    <Typography
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                    >
                        His Status: "nothing"
            </Typography>
                    <Divider className={classes.margin} light />
                    <Fab size="small" color="secondary" aria-label="update" className={classes.margin} onClick={handleClickOpen}>
                        <AddIcon />
                    </Fab>
                </CardContent>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="title"
                            label="Task Title"
                            type="text"
                            fullWidth
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="body"
                            name="body"
                            label="Task Description"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="title"
                            label="Task Title"
                            type="text"
                            fullWidth
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="body"
                            name="body"
                            label="Task Description"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="title"
                            label="Task Title"
                            type="text"
                            fullWidth
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="body"
                            name="body"
                            label="Task Description"
                            type="text"
                            fullWidth
                        />

                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <br />
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                            <Select
                                native
                                value={age}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-native-simple',
                                }}
                            >
                                <option value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>



                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus color="primary">
                            SAVE
                  </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            CANCEL
                  </Button>
                    </DialogActions>
                </Dialog>
            </CardActionArea>
        </Card>
    );
}