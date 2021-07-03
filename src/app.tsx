
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';

const theme = createMuiTheme();

export class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme} >
          <Button type="button" variant="contained" >Hello World</Button>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}