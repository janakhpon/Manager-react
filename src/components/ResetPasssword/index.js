import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Backdrop from '@material-ui/core/Backdrop';
import { amber, green } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import CustomTextField from '../CustomTextField'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks';
import { RESETPASSWORD } from '../Queries';


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: "#ffffff",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#fff',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
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
    btn: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#f50057",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#d50000"
        },
        "&:disabled": {
            backgroundColor: "#d50000"
        },
    },
}));

const INITIAL_VALUES = {
    code: "",
    email: "",
    password: ""
}

const INIT_VALUES = {
    display: false
}

const PageResetPassword = () => {
    const history = useHistory()
    const [values, setValues] = React.useState(INITIAL_VALUES)
    const [btnclass, setBtnclass] = React.useState(INIT_VALUES)
    const [open, setOpen] = React.useState(true);
    const [userResetPassword, { loading, data, error }] = useMutation(RESETPASSWORD);
    const classes = useStyles();
    const handleChange = (e) => {
        e.persist();
        setValues(previousValues => ({
            ...previousValues, [e.target.name]: e.target.value
        }))
    }

    const onClose = () => {
        setOpen(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let email = localStorage.getItem('email-psw-reset')
        let code = values.code
        let password = values.password
        try {
            let logg = await userResetPassword({ variables: { email, code, password } })
            console.log(logg)
        } catch (err) {
            setOpen(true)
        }
    }

    const handleConfirm = (e) => {
        e.preventDefault()
        setBtnclass({
            display: true
        })
    }

    return (
        <Container component="main" maxWidth="xs">
            {
                loading ? (
                    <Backdrop
                        className={classes.backdrop}
                        open={true}
                    >
                        <CircularProgress color="secondary" />
                    </Backdrop>
                ) : ('')
            }
            {
                error ? (
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={onClose}
                        autoHideDuration={2000}
                    >
                        <SnackbarContent
                            className={classes.notibox}
                            aria-describedby="client-snackbar"
                            message={
                                <span id="client-snackbar" className={classes.message}>
                                    {error.graphQLErrors.map(x => x.message)}
                                </span>
                            }
                            action={[
                                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                                    <CloseIcon className={classes.icon} />
                                </IconButton>,
                            ]}
                        />
                    </Snackbar>
                ) : ('')
            }
            {
                data ? (
                    history.push('/Page-signin')
                ) : ('')
            }
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <ClearAllIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    RESET PASSWORD
                </Typography>
                <form className={classes.form} noValidate>
                    <CustomTextField
                        variant="outlined"
                        margin="normal"
                        onChange={handleChange}
                        value={values.code}
                        required
                        fullWidth
                        id="activatecode"
                        label="CODE - XXXXXXX"
                        name="code"
                        autoComplete="activatecode"
                        autoFocus
                    />
                    <Grid container
                        direction="row"
                        justify="center"
                        alignitems="center">
                        <Grid item xs={5} >
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
                                className={classes.btn}
                            >
                                CANCEL
                            </Button>
                        </Grid>
                        <Grid item xs={2} >
                            {' '}
                        </Grid>
                        <Grid item xs={5} >
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={handleConfirm}
                                className={classes.submit}
                            >
                                CONFIRM
                     </Button>
                        </Grid>
                    </Grid>
                    <CustomTextField
                        variant="outlined"
                        margin="normal"
                        onChange={handleChange}
                        required
                        fullWidth
                        name="password"
                        label="New Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                    />
                    <CustomTextField
                        variant="outlined"
                        margin="normal"
                        onChange={handleChange}
                        required
                        fullWidth
                        name="cpassword"
                        label="Confirm Password"
                        type="password"
                        id="cpassword"
                        autoComplete="confirm-password"
                    />
                    {
                        btnclass.display ? (<>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
                                className={classes.submit}
                            >
                                UPDATE PASSWORD
                        </Button>
                        </>) : (<></>)
                    }

                </form>
            </div>
        </Container>
    );
}

export default PageResetPassword;