import React from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from "@material-ui/styles"

const styles = {
    underline: {
        // normal style
        "&::before": {
            borderBottom: "4px solid green"
        },
        // hover style
        "&:hover:not(.Mui-disabled):before": {
            borderBottom: "4px solid blue"
        },
        // focus style
        "&::after": {
            borderBottom: "4px solid red"
        },

        background: 'transparent',
        color: '#ffffff',
    },
    formLabel: {
        color: '#ffffff',
        '&.Mui-focused': {
            color: '#d90429'
        }
    },
}

const CustomTextField = withStyles(styles)(props => {
    const { classes, ...other } = props;
    return <TextField InputProps={{ className: classes.underline }} InputLabelProps={{ className: classes.formLabel }} {...other} />;
});


export default CustomTextField