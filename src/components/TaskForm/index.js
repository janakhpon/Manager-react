import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_TASK } from '../Mutations'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: 200,
    },
}));

const PageTaskform = ({task}) => {
    const { id, title, body, visibility, completed, date } = props.location.state
    const classes = useStyles();
    const INITIAL_STATE = {
        id: id,
        title: title,
        body: body,
        completed: completed,
        visibility: visibility,
        date: date
    }
    const [values, setValues] = useState(INITIAL_STATE);
    const [updateTask, { data }] = useMutation(UPDATE_TASK);
    function handleChange(event) {
        event.persist();
        setValues(previousValues => ({
            ...previousValues, [event.target.name]: event.target.value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        let d = new Date()
        let now = parseInt(d.getTime())
        let data = {
            id: values.id,
            title: values.title,
            body: values.body,
            completed: values.completed,
            visibility: values.visibility,
            author: "ca90f193-127e-441d-91c1-b67100ad4016",
            date: now
        }
        updateTask({
            id: values.id,
            title: values.title,
            body: values.body,
            completed: values.completed,
            visibility: values.visibility,
            author: "ca90f193-127e-441d-91c1-b67100ad4016",
            date: now
        })
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

            <Button variant="contained" color="primary" onClick={handleSubmit}>
                update
            </Button>
        </div>
    );
}

export default PageTaskform;