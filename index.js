// Wait for specified milliseconds
function waitFor(ms = 0) {
  return new Promise((cb) => setTimeout(cb, ms));
}

module.exports = waitFor;
