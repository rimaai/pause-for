const test = require("tape");
const waitFor = require("./");

test("should be a promise", (t) => {
  t.plan(1);
  t.equal(typeof waitFor().then, 'function');
});

test("should wait", (t) => {
  t.plan(1);
  const order = [];

  waitFor(5).then((_) => {
    order.push("b");
    t.deepEqual(["a", "b"], order);
  });
  order.push("a");
});

test("should push the event to the end of event callstack even while entering time 0", (t) => {
  t.plan(1);
  const order = [];

  waitFor(0).then((_) => {
    order.push("a");
    t.deepEqual(["b", "c", "a"], order);
  });

  order.push("b");
  order.push("c");
});
