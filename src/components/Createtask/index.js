import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),s
  },
  textField: {
    width: 200,
  },
}));


const CREATE_TASK = gql`
  
`;


const TDGaddformPage = (props) => {
  const classes = useStyles();
  const INITIAL_STATE = {
    id:"",
    title:"",
    body:"",
    completed: "",
    visibility: "",
    date: ""
  }
  const [values, setValues] = useState(INITIAL_STATE);

  let title = values.title
  let body = values.body
  let visibility = values.visibility
  let author = "ca90f193-127e-441d-91c1-b67100ad4016"

  const [createTask, { loading, error }] = useMutation(CREATE_TASK, {
    variables: { data:{ title, body, visibility, author} },
  })
  
  function handleChange(event) {
    event.persist();
    setValues(previousValues => ({
      ...previousValues, [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let d = new Date()
    let now = parseInt(d.getTime())
    


    await createTask({ variables: { title, body, visibility, author }})

    console.log(title)
    console.log(author)
  }

  return (
    <div className={classes.root}>

      <TextField
        autoFocus
        margin="dense"
        id="id"
        name="id"
        label="Task ID"
        type="text"
        onChange={handleChange}
        value={values.id}
        fullWidth
      />

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

      <Button variant="contained" color="primary" onClick={createTask}>
        update
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </div>
  );
}

export default TDGaddformPage;