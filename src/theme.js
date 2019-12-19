import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#fff',
    },
    text: {
      primary: "#ffffff",
      secondary: "#0984e3"
    } ,
    error: {
      main: red.A400,
    },
    background: {
      default: '#34495e',
    },
  },
});

export default theme;
