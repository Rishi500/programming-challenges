function curry(f) {
  return function allArgs(...args1) {
    const complete =
      args1.length >= f.length && !args1.slice(0,f.length).includes(curry.placeholder);
    if (complete) {
      return f(...args1);
    } else {
      return function (...args2) {
        const rest = args1.map((arg) => 
          arg === curry.placeholder && args2.length ? args2.shift() : arg
        );
        console.log(...rest, ...args2)
        return allArgs(...rest, ...args2);
      };
    }
  };
}

const join = (a, b, c) => {
  console.log(`${a}_${b}_${c}`);
};
curry.placeholder = Symbol();
const curriedJoin = curry(join);
const _ = curry.placeholder;

curriedJoin(_, 2)(1, 3); // '1_2_3'
curriedJoin(1,_,3)(_)(2)
curriedJoin(_,_,_)(_,_)(1,_)(_,3)(2)
curriedJoin(_,_,_,_)(_,2,_)(_,3)(1)