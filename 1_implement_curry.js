// implement a curry() function, which accepts a function and return a curried one.

function curry(f) {
  return function allArgs(...args1) {
    if (args1.length >= f.length) {
      return f(...args1);
    } else {
      return function partialArgs(...args2) {
        return allArgs(...args1, ...args2);
      };
    }
  };
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3)); // '1_2_3'

console.log(curriedJoin(1)(2, 3)); // '1_2_3'

console.log(curriedJoin(1, 2)(3)); // '1_2_3'
