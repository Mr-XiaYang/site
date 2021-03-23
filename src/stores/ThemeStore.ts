import createMuiTheme, {Theme, ThemeOptions} from '@material-ui/core/styles/createMuiTheme'
import {action, IObservableValue, makeObservable, observable, reaction} from "mobx"
import BaseStore from "./BaseStore";
import {RootStore} from "./RootStore";


export interface InitialData {
  options: ThemeOptions
}

const defaultOptions: ThemeOptions = {}

export class ThemeStore extends BaseStore {
  @observable options: ThemeOptions;
  @observable.ref readonly muiTheme: IObservableValue<Theme>;

  constructor(rootStore: RootStore) {
    super();
    makeObservable(this);
    this.options = defaultOptions;
    this.muiTheme = observable.box(createMuiTheme(this.options));
    // reaction(() => this.options, (options) => {
    //   this.muiTheme.set(createMuiTheme(options));
    // }, {fireImmediately: false, delay: 100});
  }

  @action
  hydrate(initialData?: Partial<InitialData>): void {
    if (initialData?.options) this.options = initialData.options;
  }
}
