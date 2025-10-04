function throwError(req, res, next) {
  throw new Error('Intentional server error for testing');
}

module.exports = { throwError };