import {createMuiTheme} from "@material-ui/core/styles";

const light = createMuiTheme();
const dark = createMuiTheme({palette: {type: "dark"}});

export default {light, dark};
