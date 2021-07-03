import {Theme} from "@material-ui/core/styles";

import {computed, makeObservable, observable} from "mobx";
import themes, {ThemeMode} from "../theme";
import type BaseStore from "./baseStore";
import type RootStore from "./index";

export default class ThemeStore implements BaseStore {

  @observable.ref
  readonly rootStore: RootStore;

  @computed
  get currentTheme(): Theme {
    const themeMode = this.rootStore.configStore.themeMode === ThemeMode.System
      ? this.rootStore.appStore.themeMode : this.rootStore.configStore.themeMode;
    const themeName = this.rootStore.configStore.themeName;
    return themes[themeName][themeMode];
  }

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }
}
