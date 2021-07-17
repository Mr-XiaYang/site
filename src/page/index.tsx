import {History} from "history";
import React from "react";
import {Route, Router, Switch} from "react-router";
import {HomePage} from "./home_page";

type InlineProps = {
  history: History
} & InjectProps

type InjectProps = {}

export type AppRouterProps = PropsWrapper<InlineProps, InjectProps>

export const AppRouter = (
  class _AppRouter extends React.PureComponent<InlineProps> {
    constructor(props: InlineProps) {
      super(props);
    }

    componentDidMount() {
    }

    render() {
      return (
        <Router history={this.props.history}>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/test'/>
          </Switch>
        </Router>
      );
    }
  }
) as unknown as React.ComponentType<AppRouterProps>;

export default AppRouter;
