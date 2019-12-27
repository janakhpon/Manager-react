import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    overflow: 'hidden'
  },
}));





export default function PageUser({ profile }) {
  const { address, school, career, gender, hobby, info, birthdate, avatar } = profile
  const { name } = profile.author
  const age = moment(birthdate, "MM/DD/YYYY").fromNow().split(" ")[0];
  const classes = useStyles();


  return (
    <ExpansionPanel className={classes.expand}>
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
                  {career} {`  `}
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
            Career : {career}
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