import {History} from "history";
import React from "react";
import {Route, Router, Switch} from "react-router";
import propsWrapper from "../hoc/propsWrapper";
import HomePage from "./homePage";
import DockerInstall, {metaData} from "../../blog/docker_install.mdx";

type Props = {
    history: History
}

class AppRouter extends React.PureComponent<Props> {
    render() {
        console.log(metaData);
        return (
            <Router history={this.props.history}>
                <Switch>
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/test'>
                        <DockerInstall/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default propsWrapper<Props>(AppRouter);
