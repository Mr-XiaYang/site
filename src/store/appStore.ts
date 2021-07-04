import {makeObservable, observable, runInAction} from "mobx";

import React from "react";
import _ from "lodash";

import {ThemeMode} from "../theme";
import type BaseStore from "./baseStore";
import type RootStore from "./index";


const AppListener = (props: { appStore: AppStore }) => {
    const {current: themeMediaQuery} = React.useRef<MediaQueryList>(window.matchMedia("(prefers-color-scheme: dark)"));
    const windowResizeHandler = React.useCallback(_.throttle((event) => runInAction(() => {
        props.appStore.windowHeight = event.target.innerHeight;
        props.appStore.windowWidth = event.target.innerWidth;
    }), 200, {}), []);
    const themeModeChangeHandler = React.useCallback(_.throttle((event: { matches: boolean }) => runInAction(() => {
        props.appStore.themeMode = event.matches ? ThemeMode.Dark : ThemeMode.Light;
    }), 200), []);


    React.useEffect(() => {
        window.addEventListener('resize', windowResizeHandler);
        themeMediaQuery.addEventListener('change', themeModeChangeHandler);
        return () => {
            window.removeEventListener('resize', windowResizeHandler);
            themeMediaQuery.removeEventListener('change', themeModeChangeHandler);
        };
    }, [])
    return null;
};

export default class AppStore implements BaseStore {
    static Listener = AppListener;

    readonly rootStore: RootStore;

    @observable
    windowHeight: number = window.innerHeight;
    @observable
    windowWidth: number = window.innerWidth;

    @observable
    themeMode: ThemeMode.Light | ThemeMode.Dark =
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? ThemeMode.Dark : ThemeMode.Light;

    constructor(rootStore: RootStore) {
        makeObservable(this);
        this.rootStore = rootStore;
    }
}
