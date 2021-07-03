import {Theme} from "@material-ui/core/styles";
import material from "./material";

export enum ThemeMode {
  System = "System",
  Light = "Light",
  Dark = "Dark"
}

export enum ThemeName {
  Material = 'Material',
}

const themes: {
  [N in ThemeName]: {
    [M in ThemeMode.Light | ThemeMode.Dark]: Theme
  }
} = {
  Material: {
    Light: material.light,
    Dark: material.dark
  }
}

export default themes;




