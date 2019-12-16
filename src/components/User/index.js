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
import { UPDATE_profile } from "../Queries";
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





export default function PageUser({ profile }) {
  const { address, school, career, gender, hobby, info, birthdate, avatar } = profile
  const { id, name } = profile.author
  const age = moment(birthdate, "MM/DD/YYYY").fromNow().split(" ")[0];
  // const [updateprofile, { loading, error, data }] = useMutation(UPDATE_profile);

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
  //   let id = profile.id
  //   let author = localStorage.getItem('id')
  //   let title = profile.title
  //   let body = profile.body
  //   let completed = new Boolean(val)
  //   let visibility = new Boolean(profile.visibility)
  //   updateprofile({ variables: { id, title, body, completed, visibility, author } })
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

  //   let id = profile.id
  //   let author = localStorage.getItem('id')
  //   let title = values.title
  //   let body = values.body
  //   let completed = new Boolean(values.completed)
  //   let visibility = new Boolean(values.visibility)

  //   updateprofile({ variables: { id, title, body, completed, visibility, author } })

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
            <Avatar alt={name} src={avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  A {career} {`  `}
                </Typography>
                - graduated from {school}
              </React.Fragment>
            }
          />
        </ListItem>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ImageAvator alt={name} img={avatar} />
        <div className={classes.papercustom} borderBottom={0}>
          <Typography variant="h6" component="h3">
            Name : {name}
          </Typography>
          <Typography component="p">
            Career : A {career}
          </Typography>
          <Typography component="p">
            Address Line : Live at {address}
          </Typography>
          <Typography variant="p" component="p">
            Gender : {gender}
          </Typography>
          <Typography variant="p" component="p">
            Hobby : {hobby}
          </Typography>
          <Typography component="p">
            Career : A {career}
          </Typography>
          <Typography component="p">
            {age} years old
          </Typography>
          <Typography variant="p" component="p">
            Bio : {info}
          </Typography>
          <Typography variant="p" component="p">
            Studied at {school}
          </Typography>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>

  );
}