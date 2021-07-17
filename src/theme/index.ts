import {Theme} from "@material-ui/core/styles";
import {light as materialLight, dark as materialDark} from "./material";

export enum ThemeMode {
  System = "System",
  Light = "Light",
  Dark = "Dark"
}

export enum ThemeName {
  Material = 'Material',
}

export const Themes: {
  [N in ThemeName]: {
    [M in ThemeMode.Light | ThemeMode.Dark]: Theme
  }
} = {
  Material: {
    Light: materialLight,
    Dark: materialDark
  }
}
