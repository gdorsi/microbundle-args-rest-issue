export function brokenArgsRest(fn, ...args) {
  return function () {
    fn(...args);
  };
}

export function workingArgsRest(fn, ...args) {
  return () => {
    fn(...args);
  };
}
