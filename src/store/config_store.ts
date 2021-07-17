import {action, observable} from "mobx";

import {ThemeMode, ThemeName} from "../theme";
import {BaseStore} from "./base_store";

export class ConfigStore extends BaseStore {

  @observable
  themeMode: ThemeMode = ThemeMode.System;
  @observable
  themeName: ThemeName = ThemeName.Material;

  protected initialize() {
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
