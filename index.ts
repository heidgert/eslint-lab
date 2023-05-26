import func from "./helper";

var prop1 = func({
  prop1: "hello world",
  // prop2 intentionally left out to cause compile error
});

console.log("prop1", prop1);
