export {};

declare global {
  interface StringConstructor {
    empty(): string;
  }
}

String.empty = function() {
  return '';
};
