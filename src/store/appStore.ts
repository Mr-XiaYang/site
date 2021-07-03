import {makeObservable, observable, runInAction} from "mobx";

import React from "react";

import {ThemeMode} from "../theme";
import type BaseStore from "./baseStore";
import type RootStore from "./index";


const AppListener = (props: { appStore: AppStore }) => {
  const {current: themeMediaQuery} = React.useRef<MediaQueryList>(window.matchMedia("(prefers-color-scheme: dark)"));
  const themeModeChangeHandler = React.useCallback((event: { matches: boolean }) => runInAction(() => {
    props.appStore.themeMode = event.matches ? ThemeMode.Dark : ThemeMode.Light;
  }), []);

  React.useEffect(() => {
    themeModeChangeHandler(themeMediaQuery);
    themeMediaQuery.addEventListener('change', themeModeChangeHandler);
    return () => {
      themeMediaQuery.removeEventListener('change', themeModeChangeHandler);
    };
  }, [])
  return null;
};

export default class AppStore implements BaseStore {
  static Listener = AppListener;

  readonly rootStore: RootStore;

  @observable
  themeMode: ThemeMode.Light | ThemeMode.Dark =
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? ThemeMode.Dark : ThemeMode.Light;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }
}
