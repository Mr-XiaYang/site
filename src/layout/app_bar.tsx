import MuiAppBar from "@material-ui/core/AppBar";

import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import {observer} from "mobx-react";
import React from "react";
import {Logo} from "./logo";
import {SearchInput} from "./search_input";

export type AppBarProps = {}

@observer
export class AppBar extends React.PureComponent<AppBarProps> {
  render() {
    return (
      <MuiAppBar position="fixed" elevation={0}>
        <Toolbar>
          <Logo/>
          <Box flex={1}/>
          <SearchInput/>
        </Toolbar>
      </MuiAppBar>
    );
  }
}

