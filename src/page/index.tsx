import {History} from "history";
import React from "react";
import {Route, Router, Switch} from "react-router";
import propsWrapper from "../hoc/propsWrapper";
import HomePage from "./homePage";
import documents from "../../blog/software_architect/**/*.mdx";

type Props = {
    history: History
} & InjectProps

type InjectProps = {}

class AppRouter extends React.PureComponent<Props> {

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        console.log(documents);
    }

    render() {
        return (
            <Router history={this.props.history}>
                <Switch>
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/test'>

                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default propsWrapper<Props, InjectProps>(AppRouter);
