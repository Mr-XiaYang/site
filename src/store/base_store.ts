import {makeObservable, observable} from "mobx";
import type {RootStore} from "./root_store";

export abstract class BaseStore {
  @observable.ref
  protected readonly rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;

    this.initialize();
  }

  protected abstract initialize(): void;
}
