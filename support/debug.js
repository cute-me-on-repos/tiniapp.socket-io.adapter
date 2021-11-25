module.exports = function (env) {
  const log = console.log

  return function () {
    log.apply(this, [
      "%c" + arguments[0],
      "color: green",
      ...[].slice.call(arguments, 1),
    ])
  }
}
