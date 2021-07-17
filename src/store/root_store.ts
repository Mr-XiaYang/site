import {AppStore} from "./app_store";
import {ConfigStore} from "./config_store";
import {ThemeStore} from "./theme_store";
import {DocsStore} from "./docs_store";

export class RootStore {
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
