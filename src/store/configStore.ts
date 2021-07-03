import {action, makeObservable, observable} from "mobx";

import {ThemeMode, ThemeName} from "../theme";
import type BaseStore from "./baseStore";
import type RootStore from "./index";


export default class ConfigStore implements BaseStore {
  @observable.ref
  readonly rootStore: RootStore;

  @observable
  themeMode: ThemeMode = ThemeMode.System;
  @observable
  themeName: ThemeName = ThemeName.Material;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore
  }

  @action
  changeThemeMode(themeMode: ThemeMode) {
    if (this.themeMode !== themeMode) {
      this.themeMode = themeMode;
    }
  }

  @action
  changeThemeName(themeName: ThemeName) {
    if (this.themeName !== themeName) {
      this.themeName = themeName;
    }
  }
}
