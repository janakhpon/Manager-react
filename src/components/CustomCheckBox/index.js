import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from "@material-ui/styles"


const checkBoxStyles = () => ({
    root: {
        '&$checked': {
            color: '#FF0A53',
        },
    },
    checked: {},
})

const CustomCheckBox = withStyles(checkBoxStyles)(Checkbox)

export default CustomCheckBox