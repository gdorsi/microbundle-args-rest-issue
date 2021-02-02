function brokenArgsRest(fn) {
  return function () {
    fn.apply(void 0, [].slice.call(arguments, 1));
  };
}
function workingArgsRest(fn) {
  var _arguments = arguments;
  return function () {
    fn.apply(void 0, [].slice.call(_arguments, 1));
  };
}

export { brokenArgsRest, workingArgsRest };
