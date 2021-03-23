import {enableStaticRendering} from 'mobx-react';
import {RootStore, InitialData} from './RootStore';

if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('mobx-logger').enableLogging({
    predicate: () => true,
    action: true,
    reaction: true,
    transaction: true,
    compute: true
  });
}

enableStaticRendering(typeof window === 'undefined')

let store: RootStore = null
export default function initializeStore(initialData?: Partial<InitialData>): RootStore {
  if (typeof window === 'undefined') {
    const store = new RootStore();
    store.hydrate(initialData);
    return store;
  }
  if (store === null) {
    store = new RootStore();
    store.hydrate(initialData);
  }
  return store;
}

export type {RootStore, InitialData as RootStoreInitialData} from "./RootStore";
export type {ThemeStore, InitialData as ThemeStoreInitialData} from "./ThemeStore";
