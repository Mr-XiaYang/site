import {Theme} from "@material-ui/core/styles";

import {computed} from "mobx";
import {Themes, ThemeMode} from "../theme";
import {BaseStore} from "./base_store";

export class ThemeStore extends BaseStore {

  @computed
  get currentTheme(): Theme {
    const themeMode = this.rootStore.configStore.themeMode === ThemeMode.System
      ? this.rootStore.appStore.themeMode : this.rootStore.configStore.themeMode;
    const themeName = this.rootStore.configStore.themeName;
    return Themes[themeName][themeMode];
  }

  protected initialize() {
  }
}
