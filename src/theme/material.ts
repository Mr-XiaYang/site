import {createTheme} from "@material-ui/core/styles";

const light = createTheme();
const dark = createTheme({palette: {type: "dark"}});

export default {light, dark};
