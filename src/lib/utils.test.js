import { pipe } from "./utils";

const add = (a, b) => a + b;
const inc = num => num + 1;
const dbl = num => num * 2;

test("passes the result of inc to dbl", () => {
  const pipeline = pipe(inc, dbl); //=> dbl(inc(2))
  const result = pipeline(2);
  expect(result).toBe(6);
});

test("passes the result of dbl to inc", () => {
  const pipeline = pipe(dbl, inc); // => inc(dbl(2))
  const result = pipeline(2);
  expect(result).toBe(5);
});

test("pipe works with more than 2 functions", () => {
  const pipeline = pipe(add, inc, dbl, inc); // => inc(dbl(add(1,1)))
  const result = pipeline(1, 1);
  expect(result).toBe(7);
});
