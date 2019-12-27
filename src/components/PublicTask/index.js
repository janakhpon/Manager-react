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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import moment from 'moment'
import ImageAvator from '../Avator'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    papercustom: {
        padding: theme.spacing(3, 2),
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
    }
}));





export default function PagePublicTask({ task }) {
    const [open, setOpen] = React.useState(false)
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
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
                    control={<Checkbox checked={task.completed}
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
                        {task.visibility ? (<h6>Available to Public</h6>) : (<h6>Not available to Public</h6>)}
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
                    <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="id"
                            name="id"
                            label="Task ID"
                            type="text"
                            value={task.id}
                            fullWidth
                        />

                        <TextField
                            value={task.title}
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
                            value={task.body}
                            margin="dense"
                            id="body"
                            name="body"
                            label="Task Description"
                            type="text"
                            fullWidth
                        />

                        <TextField
                            value={task.completed}
                            autoFocus
                            margin="dense"
                            id="completed"
                            name="completed"
                            label="Completed: true/false"
                            type="text"
                            fullWidth
                        />

                        <TextField
                            value={task.visibility}
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

                    View
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                >
                    Delete
                    </Button>

            </ExpansionPanelActions>
        </ExpansionPanel>

    );
}