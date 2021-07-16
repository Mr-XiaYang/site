import AppStore from "./appStore";
import ConfigStore from "./configStore";
import ThemeStore from "./themeStore";
import DocsStore from "./docsStore";

class RootStore {
  appStore: AppStore;
  configStore: ConfigStore;
  themeStore: ThemeStore;
  docsStore: DocsStore;

  constructor() {
    this.appStore = new AppStore(this);
    this.configStore = new ConfigStore(this);
    this.themeStore = new ThemeStore(this);
    this.docsStore = new DocsStore(this);
  }
}

export default RootStore;
