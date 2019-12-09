import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';
import { GET_TASKS } from "../Queries";
import moment from 'moment'
import PDGloadingPage from '../Loading';
import PDGerrorPage from '../Error';
import ImageAvator from '../Avator'
import useFormValidation from './useFormValidation'

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
    justifyContent:"center",
    alignSelf : "center",
  },
}));

const INITIAL_STATE = {
  id : "",
  title: "",
  body: "",
  completed: "",
  visibility: "",
  date: ""
}


export default function TDGpanelPage(props) {
  const { handleSubmit, handleChange, values } = useFormValidation(
    INITIAL_STATE
  );
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [id, setId] = React.useState('');
  const [title, setTitle] = React.useState('')
  const [body, setBody] = React.useState('')
  const [completed, setCompleted] = React.useState(null)
  const [avisibility, setAvisibility] = React.useState(null)
  const [date, setDate] = React.useState('')
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const getAllTasks = useQuery(GET_TASKS);
  if (getAllTasks.loading) return <PDGloadingPage />;
  if (getAllTasks.error) return <PDGerrorPage />;
  let data = getAllTasks.data;
  let a, b, c, d, e, f, g = "";


  return (
    <div className={classes.root}>
      {
        data.tasks.map((task, key) => {
          return (
            <ExpansionPanel>
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
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  className={classes.button}
                  startIcon={<SpellcheckIcon />}
                  onClick={handleClickOpen}
                >
                <Link to={{
                  pathname: `/app-edit`,
                  state: {
                    id: task.id,
                    title: task.title,
                    body: task.body,
                    completed: task.completed,
                    visibility: task.visibility,
                    date: task.date
                  }
                }}>

                  Update
                </Link>
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
        })
      }

    </div>
  );
}