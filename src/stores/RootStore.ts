import BaseStore from "./BaseStore";
import {toJS} from 'mobx'
import {ThemeStore, InitialData as ThemeStoreInitialData} from "./ThemeStore";

export interface InitialData {
  themeStore: ThemeStoreInitialData
}

export class RootStore extends BaseStore {
  themeStore: ThemeStore

  constructor() {
    super();
    this.themeStore = new ThemeStore(this);
  }

  hydrate(initialData?: Partial<InitialData>): void {
    this.themeStore.hydrate(initialData.themeStore);
  }
}
