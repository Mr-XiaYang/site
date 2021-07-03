import type RootStore from "./index";

export default interface BaseStore {
  readonly rootStore: RootStore;
}
