import Button from '@material-ui/core/Button';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {History} from "history";

import {observer} from "mobx-react";
import React from 'react';
import {Route, Router, Switch} from "react-router";


import ThemeStore from "./store/themeStore";

type StoreProps = {
  themeStore: ThemeStore
}

type Props = {
  history: History
} & StoreProps;

@observer
export class App extends React.PureComponent<Props> {
  render() {
    return (
      <Router history={this.props.history}>
        <Switch>
          <Route path='/' exact>
          </Route>
        </Switch>
      </Router>
    );
  }
}
