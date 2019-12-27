import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent'
import Divider from "@material-ui/core/Divider";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab';
import InputLabel from '@material-ui/core/InputLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DateFnsUtils from "@date-io/date-fns"; // import
import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import { useMutation } from '@apollo/react-hooks';
import { DELETE_PROFILE, UPDATE_PROFILE } from "../Queries";
import { format } from 'date-fns'
import PageLoading from '../Loading'
import PageError from '../Error'




const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 800,
        textAlign: "center",
        overflow: "hidden",
        color: "#ffffff",
        backgroundColor: "#003459",
    },
    bigAvatar: {
        width: 200,
        height: 200,
    },
    image: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function PageMePostive({ data }) {

    const { id, avatar, info, address, gender, school, hobby, career, birthdate, author } = data.profiles[0]
    const INIT_STATE = {
        id,
        avatar,
        info,
        address,
        gender,
        school,
        hobby,
        career,
        birthdate,
        author
    }
    const [values, setValues] = React.useState(INIT_STATE)
    const [updateProfile] = useMutation(UPDATE_PROFILE);
    const [deleteProfile] = useMutation(DELETE_PROFILE)
    const [gend, setGend] = React.useState(gender);
    const [open, setOpen] = React.useState(false)
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = event => {
        setValues((previousValues) => ({
            ...previousValues, [event.target.name]: event.target.value
        }))
    };
    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const handleSelectChange = e => {
        setGend(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let id = values.id
        let address = values.address
        let info = values.info
        let avatar = values.avatar
        let school = values.school
        let career = values.career
        let hobby = values.hobby
        let birthdate = format(new Date(selectedDate), 'MM-dd-yyyy')
        let author = localStorage.getItem('id')
        let gender = gend
        const gosave = await updateProfile({
            variables: { id, address, info, gender, avatar, school, career, hobby, birthdate, author }
        })

        if (gosave.loading) return <PageLoading />
        if (gosave.error) return <PageError />
        // if (gosave.data) return <PageMePositive data={gosave.data} />

        setOpen(false);

    }

    const handleDelete = async (e) => {
        e.preventDefault()
        let id = values.id
        const godelete = deleteProfile({ variables: { id } })
        if (godelete.loading) return <PageLoading />
        if (godelete.error) return <PageError />

    }

    return (
        <Card className={classes.card}>
            {
                data.profiles.map((profile, key) => {
                    const age = moment(profile.birthdate, "MM/DD/YYYY").fromNow().split(" ")[0]
                    const noun = profile.gender === "male" ? "He" : "She"
                    return (
                        <>
                            <CardActionArea>
                                <CardContent>
                                    <div className={classes.image}>
                                        <Avatar alt={profile.author.name} src={profile.avatar} className={classes.bigAvatar} />
                                    </div>

                                    <Typography
                                        className={"MuiTypography--heading"}
                                        variant={"h6"}
                                        gutterBottom
                                    >
                                        {profile.author.name}
                                    </Typography>
                                    <Typography
                                        className={"MuiTypography--subheading"}
                                        variant={"caption"}
                                    >
                                        {profile.author.name} is a {age} years old {profile.career} and graduated from {profile.school}. {noun} lives in {profile.address} and interested in {profile.hobby}. Contact hime via {profile.author.email}.
                                     </Typography>

                                    <Typography
                                        className={"MuiTypography--subheading"}
                                        variant={"caption"}
                                    >
                                        His Status: "{profile.info}"
                                    </Typography>
                                    <Divider className={classes.margin} light />
                                    <Fab size="small" color="secondary" aria-label="update" className={classes.margin} onClick={handleClickOpen}>
                                        <EditIcon />
                                    </Fab>
                                    <Fab size="small" color="secondary" aria-label="delete" className={classes.margin} onClick={handleDelete}>
                                        <DeleteIcon />
                                    </Fab>
                                </CardContent>

                                <Dialog
                                    fullScreen={fullScreen}
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="responsive-dialog-title"
                                >
                                    <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                                    <DialogContent>

                                        <TextField
                                            onChange={handleChange}
                                            value={values.address}
                                            autoFocus
                                            margin="dense"
                                            id="address"
                                            name="address"
                                            label="Address"
                                            type="text"
                                            fullWidth
                                        />

                                        <TextField
                                            onChange={handleChange}
                                            value={values.info}
                                            autoFocus
                                            margin="dense"
                                            id="info"
                                            name="info"
                                            label="Your Bio/ Status"
                                            type="text"
                                            fullWidth
                                        />

                                        <FormControl className={classes.formControl} fullWidth>
                                            <InputLabel htmlFor="gender-native-simple">Gender</InputLabel>
                                            <Select
                                                native
                                                value={gend}
                                                onChange={handleSelectChange}
                                                inputProps={{
                                                    name: 'gender',
                                                    id: 'gender-native-simple',
                                                }}
                                            >
                                                <option value="" />
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </Select>
                                        </FormControl>

                                        <TextField
                                            onChange={handleChange}
                                            value={values.avatar}
                                            autoFocus
                                            margin="dense"
                                            id="avatar"
                                            name="avatar"
                                            label="Avatar Link"
                                            type="text"
                                            fullWidth
                                        />

                                        <TextField
                                            onChange={handleChange}
                                            value={values.school}
                                            autoFocus
                                            margin="dense"
                                            id="school"
                                            name="school"
                                            label="Graduated from"
                                            type="text"
                                            fullWidth
                                        />

                                        <TextField
                                            onChange={handleChange}
                                            value={values.career}
                                            autoFocus
                                            margin="dense"
                                            id="career"
                                            name="career"
                                            label="Career"
                                            type="text"
                                            fullWidth
                                        />


                                        <TextField
                                            onChange={handleChange}
                                            value={values.hobby}
                                            autoFocus
                                            margin="dense"
                                            id="hobby"
                                            name="hobby"
                                            label="Hobby"
                                            type="text"
                                            fullWidth
                                        />

                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <DatePicker value={selectedDate} onChange={handleDateChange} />
                                        </MuiPickersUtilsProvider>



                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus color="primary" onClick={handleSubmit}>
                                            SAVE
                              </Button>
                                        <Button onClick={handleClose} color="primary" autoFocus>
                                            CANCEL
                              </Button>
                                    </DialogActions>
                                </Dialog>
                            </CardActionArea>

                        </>
                    )
                })
            }
        </Card>
    );
}