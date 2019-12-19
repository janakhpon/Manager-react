import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_TASK } from "../Queries";
import { Link, useHistory } from 'react-router-dom'
import * as routes from '../../constants/routes'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useQuery } from 'react-apollo'
import { GET_ME } from '../Queries'

const NavLink = styled(Link)`
    text-decoration: none;
    text-align: center;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  button: {
    margin: theme.spacing(1),
  },
  menuItem: {
    textAlign: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


const INITIAL_STATE = {
  title: "",
  body: "",
  visibility: false,
  author: ""
}


const PageNav = ({ session }) => {
  const history = useHistory()
  const [createTask] = useMutation(CREATE_TASK);
  const [values, setValues] = React.useState(INITIAL_STATE)
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCheckChange = (e) => {
    checked ? setChecked(false) : setChecked(true)


  };

  const handleChange = (e) => {

    e.persist();
    setValues(previousValues => ({
      ...previousValues, [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let author = localStorage.getItem('id')
    let title = values.title
    let body = values.body
    let visibility = checked



    createTask({ variables: { title, body, visibility, author } })

    setOpen(false);

  }

  const lockMeOut = (e) => {
    localStorage.setItem('id', null)
    localStorage.setItem('name', null)
    localStorage.setItem('num', null)
    history.push('/Page-signin')

  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <NavLink to={routes.LANDING}>
          HOME
      </NavLink>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <NavLink to={routes.SIGN_UP}>
          SIGN UP
      </NavLink></MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <NavLink to={routes.SIGN_IN}>
          SIGN IN
      </NavLink>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <NavLink to={routes.HELP}>
          HELP
        </NavLink>
      </MenuItem>
    </Menu>
  );

  const menuAuthedId = 'primary-search-account-menu';
  const renderMenuAuthed = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuAuthedId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem className={classes.menuItem} onClick={handleMenuClose}>
        <NavLink to={routes.ME}>
          {session.name}
        </NavLink>
      </MenuItem>
      <MenuItem className={classes.menuItem} onClick={handleMenuClose}>
        <NavLink to={routes.PRIVATETASKS}>
          Private Tasks
      </NavLink>
      </MenuItem>
      <MenuItem className={classes.menuItem} onClick={handleMenuClose}>
        <NavLink to={routes.PUBLICTASKS}>
          Public Tasks
    </NavLink>
      </MenuItem>
      <MenuItem className={classes.menuItem} onClick={handleMenuClose}>
        <NavLink to={routes.USERS}>
          List Users
      </NavLink>
      </MenuItem>
      <MenuItem className={classes.menuItem} onClick={handleMenuClose}>
        <NavLink to={routes.HELP}>
          HELP ME
    </NavLink>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Button
          color="secondary"
          size="small"
          className={classes.button}
          startIcon={<LockIcon />}
          onClick={lockMeOut}
        >
          Signout
    </Button>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NavLink to={routes.LANDING}>
          HOME
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <NavLink to={routes.SIGN_UP}>
          SIGN UP
    </NavLink></MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <NavLink to={routes.SIGN_IN}>
          SIGN IN
    </NavLink>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <NavLink to={routes.HELP}>
          HELP
      </NavLink>
      </MenuItem>
    </Menu>
  );

  const mobileMenuAuthedId = 'primary-search-account-menu-mobile-authed';
  const renderMobileMenuAuthed = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuAuthedId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NavLink to={routes.ME}>
          {session.name}
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to={routes.PRIVATETASKS}>
          Private Tasks
  </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to={routes.PUBLICTASKS}>
          Public Tasks
</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to={routes.USERS}>
          List Users
  </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to={routes.HELP}>
          HELP ME
        </NavLink>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="new task" color="inherit">
          <EditOutlinedIcon onClick={handleClickOpen} />
        </IconButton>
        NEW TASK
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Button
          color="secondary"
          size="small"
          className={classes.button}
          startIcon={<LockIcon />}
          onClick={lockMeOut}
        >
          Signout
  </Button>
      </MenuItem>
    </Menu>
  );


  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <NavLink to={routes.LANDING}>
              <MenuIcon />
            </NavLink>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Manager
    </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {session ? (
              <>
                <IconButton color="inherit">
                  <EditOutlinedIcon onClick={handleClickOpen} />
                </IconButton>
                <IconButton aria-label="show new notifications" color="inherit">
                  <Badge badgeContent={parseInt(session.numoftask)} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </>
            ) : (
                <>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>

                </>
              )
            }
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {session ? renderMobileMenuAuthed : renderMobileMenu}
      {session ? renderMenuAuthed : renderMenu}

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


          <FormControlLabel
            control={
              <Checkbox
                checked={checked} onClick={handleCheckChange}
              />
            }
            label="Available to Public?"
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit} color="primary">
            SAVE
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PageNav