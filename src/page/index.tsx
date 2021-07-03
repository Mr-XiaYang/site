import {History} from "history";
import React from "react";
import {Route, Router, Switch} from "react-router";
import HomePage from "./homePage";

type Props = {
  history: History
}

class AppRouter extends React.PureComponent<Props> {
  render() {
    return (
      <Router history={this.props.history}>
        <Switch>
          <Route path='/' exact component={HomePage}/>
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
