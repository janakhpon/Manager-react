import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import DeleteIcon from '@material-ui/icons/Delete';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import { Link } from 'react-router-dom';
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
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_TASK } from "../Queries";
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
}));





export default function PageUsers() {
  // const { id, title, body, completed, visibility, date } = task
  // const [updateTask, { loading, error, data }] = useMutation(UPDATE_TASK);

  // console.log(id)
  // const INITIAL_STATE = {
  //   id: id,
  //   title: title,
  //   body: body,
  //   completed: completed,
  //   visibility: visibility,
  //   date: date
  // }
  // const [values, setValues] = React.useState(INITIAL_STATE)
  // const [checked, setChecked] = React.useState(completed);
   const [open, setOpen] = React.useState(false)
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // const setCheckorNot = (val) => {
  //   let id = task.id
  //   let author = localStorage.getItem('id')
  //   let title = task.title
  //   let body = task.body
  //   let completed = new Boolean(val)
  //   let visibility = new Boolean(task.visibility)
  //   updateTask({ variables: { id, title, body, completed, visibility, author } })
  //   setChecked(completed)
  // }

  // const handleCheckChange = () => {

  //   //event.target.checked? (setCheckorNot(false), anotherFun()) : setCheckorNot(true)
  //   checked ? setCheckorNot(false) : setCheckorNot(true)

  // };

  // const handleChange = (e) => {

  //   e.persist();
  //   setValues(previousValues => ({
  //     ...previousValues, [e.target.name]: e.target.value
  //   }))
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   let id = task.id
  //   let author = localStorage.getItem('id')
  //   let title = values.title
  //   let body = values.body
  //   let completed = new Boolean(values.completed)
  //   let visibility = new Boolean(values.visibility)

  //   updateTask({ variables: { id, title, body, completed, visibility, author } })

  //   setOpen(false);

  // }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
        aria-controls="additional-actions1-content"
        id="additional-actions1-header"
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://filmschoolrejects.com/wp-content/uploads/2017/04/0JRofTsuy93evl_J5.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Ali Connors
              </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ImageAvator alt="Remy Sharp" img="https://filmschoolrejects.com/wp-content/uploads/2017/04/0JRofTsuy93evl_J5.jpg" />
        <div className={classes.papercustom} borderBottom={0}>

          <Typography variant="h6" component="h3">
            body
          </Typography>
          <Typography component="p">
            adfadsf
          </Typography>
          <Typography component="p">
            asdfadsf
          </Typography>
          <Typography variant="p" component="p">
            asdfadsf
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
              
              value="asdfadsf"
              fullWidth
            />

            <TextField
              
              value="{values.title}"
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
              
              value="{values.body}"
              margin="dense"
              id="body"
              name="body"
              label="Task Description"
              type="text"
              fullWidth
            />

            <TextField
              
              value="{values.completed}"
              autoFocus
              margin="dense"
              id="completed"
              name="completed"
              label="Completed: true/false"
              type="text"
              fullWidth
            />

            <TextField
              
              value="{values.visibility}"
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
            <Button autoFocus  color="primary">
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
        >
          Delete
                    </Button>

      </ExpansionPanelActions>
    </ExpansionPanel>

  );
}