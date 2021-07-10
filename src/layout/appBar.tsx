import {observer} from "mobx-react";
import React from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Box from "@material-ui/core/Box";
import Logo from "./logo";
import Search from "./search";


@observer
class AppBar extends React.PureComponent {
    render() {
        return (
            <MuiAppBar position="fixed" elevation={0}>
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

