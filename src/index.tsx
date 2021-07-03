import CssBaseline from "@material-ui/core/CssBaseline";
import {ThemeProvider, ThemeProviderProps} from "@material-ui/core/styles";
import {createHashHistory} from "history";
import {observer, Provider} from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./page";
import RootStore from "./store";
import AppStore from "./store/appStore";
import ThemeStore from "./store/themeStore";

const rootStore = new RootStore();
const history = createHashHistory();
const MuiThemeProvider = observer((props: { children: React.ReactNode; themeStore: ThemeStore }) =>
  React.createElement(ThemeProvider, {theme: props.themeStore.currentTheme, children: props.children}));

const Root: React.FunctionComponent = () => {
  return (
    <Provider {...rootStore}>
      <CssBaseline/>
      <AppStore.Listener appStore={rootStore.appStore}/>
      <MuiThemeProvider themeStore={rootStore.themeStore}>
        <AppRouter history={history}/>
      </MuiThemeProvider>
    </Provider>
  );
}

ReactDOM.render((<Root/>), document.getElementById('app'));
