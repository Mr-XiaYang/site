import AppStore from "./appStore";
import ConfigStore from "./configStore";
import ThemeStore from "./themeStore";

class RootStore {
  appStore: AppStore;
  configStore: ConfigStore;
  themeStore: ThemeStore;

  constructor() {
    this.appStore = new AppStore(this);
    this.configStore = new ConfigStore(this);
    this.themeStore = new ThemeStore(this);
  }
}

export default RootStore;
