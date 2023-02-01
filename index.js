// Wait for specified milliseconds
function pauseFor(ms = 0) {
  return new Promise((cb) => setTimeout(cb, ms));
}

module.exports = pauseFor;
