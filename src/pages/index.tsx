import {IconButton, Toolbar} from "@material-ui/core";
import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';

class HomePage extends React.PureComponent {
  render() {
    return (
      <Box width='100vw'>
        <AppBar position='sticky' variant='elevation' elevation={0} color='transparent'>
          <Toolbar disableGutters variant='dense'>
            <Box flex={1}/>
            <IconButton>
              <MenuIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box>
          test
        </Box>
      </Box>
    )
  }
}

export default HomePage;
