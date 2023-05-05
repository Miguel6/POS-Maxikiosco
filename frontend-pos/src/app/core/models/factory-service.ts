export interface FactoryService<T> {
  createInstance(): T;
}
