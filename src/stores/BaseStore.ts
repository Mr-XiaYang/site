abstract class BaseStore {

  abstract hydrate(initialData?: unknown): void;
}

export default BaseStore;
