export interface Usecase<T> {
  exec(): Promise<T>;
}
