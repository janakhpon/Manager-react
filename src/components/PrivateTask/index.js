import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import DeleteIcon from '@material-ui/icons/Delete';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { amber, green } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_TASK, DELTE_TASK } from "../Queries";
import moment from 'moment'
import ImageAvator from '../Avator'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    papercustom: {
        padding: theme.spacing(3, 2)
    },
    button: {
        margin: theme.spacing(1),
    },
    timebox: {
        marginTop: theme.spacing(2),
    },
    textcenter: {
        justifyContent: "center",
        alignSelf: "center",
    },
    expand: {
        color: "#ffffff",
        backgroundColor: "#003459",
    },
    notibox: {
        color: "#ffffff",
        backgroundColor: "#20bf55",
    },
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

export default function PagePrivateTask({ task }) {
    const { id, title, body, completed, visibility, date } = task
    const [updateTask] = useMutation(UPDATE_TASK)
    const [removeTask] = useMutation(DELTE_TASK)

    console.log(id)
    const INITIAL_STATE = {
        id: id,
        title: title,
        body: body,
        completed: completed,
        visibility: visibility,
        date: date
    }
    const [values, setValues] = React.useState(INITIAL_STATE)
    const [checked, setChecked] = React.useState(completed);
    const [open, setOpen] = React.useState(false)
    const [snackopen, setSnackopen] = React.useState(false)
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const setCheckorNot = (val) => {
        let id = task.id
        let author = localStorage.getItem('id')
        let title = task.title
        let body = task.body
        let completed = Boolean(val)
        let visibility = Boolean(task.visibility)
        updateTask({ variables: { id, title, body, completed, visibility, author } })
        setChecked(completed)
    }

    const handleCheckChange = () => {

        //event.target.checked? (setCheckorNot(false), anotherFun()) : setCheckorNot(true)
        checked ? setCheckorNot(false) : setCheckorNot(true)

    };

    const handleChange = (e) => {

        e.persist();
        setValues(previousValues => ({
            ...previousValues, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let id = task.id
        let author = localStorage.getItem('id')
        let title = values.title
        let body = values.body
        let completed = Boolean(values.completed)
        let visibility = Boolean(values.visibility)

        updateTask({ variables: { id, title, body, completed, visibility, author } })

        setOpen(false);

    }

    const handleDelete = async (e) => {
        e.preventDefault();

        let id = task.id

        const remove = await removeTask({ variables: { id } })
        if (remove) {
            setSnackopen(true)
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onClose = () => {
        setSnackopen(false)
        window.location.reload(false);
    }


    return (
        <>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={snackopen}
                autoHideDuration={6000}
            >
                <SnackbarContent
                    className={classes.notibox}
                    aria-describedby="client-snackbar"
                    message={
                        <span id="client-snackbar" className={classes.message}>
                            Removed from database!
                        </span>
                    }
                    action={[
                        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                            <CloseIcon className={classes.icon} />
                        </IconButton>,
                    ]}
                />

            </Snackbar>

            <ExpansionPanel className={classes.expand}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={event => event.stopPropagation()}
                        onFocus={event => event.stopPropagation()}
                        control={<Checkbox checked={checked} onClick={handleCheckChange}
                        />}
                        label={task.title}
                    />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <ImageAvator alt="Remy Sharp" img="https://filmschoolrejects.com/wp-content/uploads/2017/04/0JRofTsuy93evl_J5.jpg" />
                    <div className={classes.papercustom} borderBottom={0}>

                        <Typography variant="h6" component="h3">
                            {task.body}
                        </Typography>
                        <Typography component="p">
                            {task.completed ? (<h6>completed: YES</h6>) : (<h6>completed: NO</h6>)}
                        </Typography>
                        <Typography component="p">
                            {(task.visibility.toString() === 'true') ? (<h6>Available to Public</h6>) : (<h6>Not available to Public</h6>)}
                        </Typography>
                        <Typography variant="p" component="p">
                            {moment(task.date, 'x').fromNow()}
                        </Typography>

                    </div>
                </ExpansionPanelDetails>

                <ExpansionPanelActions>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                       
                    >
                        <DialogTitle id="responsive-dialog-title">{"Edit Carefully not to be falsely done!"}</DialogTitle>
                        <DialogContent  className={classes.expand}>
                            <TextField
                                onChange={handleChange}
                                value={values.title}
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
                                onChange={handleChange}
                                value={values.body}
                                margin="dense"
                                id="body"
                                name="body"
                                label="Task Description"
                                type="text"
                                fullWidth
                            />

                            <TextField
                                onChange={handleChange}
                                value={values.completed}
                                autoFocus
                                margin="dense"
                                id="completed"
                                name="completed"
                                label="Completed: true/false"
                                type="text"
                                fullWidth
                            />

                            <TextField
                                onChange={handleChange}
                                value={values.visibility}
                                autoFocus
                                margin="dense"
                                id="visibility"
                                name="visibility"
                                label="visibility: true/false"
                                type="text"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleSubmit} color="primary">
                                SAVE
                   </Button>
                            <Button onClick={handleClose} color="primary" autoFocus>
                                CANCEL
                   </Button>
                        </DialogActions>
                    </Dialog>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={classes.button}
                        startIcon={<SpellcheckIcon />}
                        onClick={handleClickOpen}
                    >

                        Update
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        onClick={handleDelete}
                    >
                        Delete
               </Button>

                </ExpansionPanelActions>
            </ExpansionPanel>
        </>

    );
}