import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Backdrop from '@material-ui/core/Backdrop'
import { amber, green } from '@material-ui/core/colors'
import CloseIcon from '@material-ui/icons/Close'
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import CustomTextField from '../CustomTextField'
import { PRERESETPASSWORD } from '../Queries'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
const NavLink = styled(Link)`
    text-decoration: none;
    outline: none;
    text-align: center;
    color: #ffffff;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        outline: none;
        color: #0984e3;
    }
`;

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: "#ffffff",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#ffffff",
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
}));

const INITIAL_VALUES = {
    email: "",
    phone: "",
    method: ""
}

const PagePreResetphone = () => {
    const history = useHistory()
    const [values, setValues] = React.useState(INITIAL_VALUES)
    const [open, setOpen] = React.useState(true);
    const [userPreResetPassword, { loading, error }] = useMutation(PRERESETPASSWORD);
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
        let email = values.email
        let phone = values.phone
        let method = "email"
        try {
            const logg = await userPreResetPassword({ variables: { email, phone, method } })
            localStorage.setItem('email-psw-reset', logg.data.userPreResetPassword.email)
            history.push(`${routes.RESETPASSWORD}`)
        } catch (err) {
            setOpen(true)
        }
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
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} noValidate>

                    <CustomTextField
                        variant="outlined"
                        margin="normal"
                        onChange={handleChange}
                        required
                        fullWidth
                        id="email"
                        label="EMAIL"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        className={classes.submit}
                    >
                        EMAIL CONFIRM
                    </Button>

                    <hr />

                    <CustomTextField
                        variant="outlined"
                        margin="normal"
                        onChange={handleChange}
                        required
                        fullWidth
                        name="phone"
                        label="SMS"
                        type="phone"
                        id="phone"
                        autoComplete="current-phone"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        SMS CONFIRM
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default PagePreResetphone;