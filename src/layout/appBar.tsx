import {inject, observer} from "mobx-react";
import React from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/search";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Logo from "./logo";
import Search from "./search";


@observer
class AppBar extends React.PureComponent {
    render() {
        return (
            <MuiAppBar position="sticky" elevation={0}>
                <Toolbar>
                    <Logo/>
                    <Box flex={1}/>
                    <Search/>
                </Toolbar>
            </MuiAppBar>
        );
    }
}

export default AppBar;

