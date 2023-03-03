console.log(Math.PI);
console.log(Math.PI.toFixed(4));

console.log("|-3.45| =", Math.abs(-3.45));

const deg2Rad = Math.PI / 180;
const rad2Deg = 1 / deg2Rad;
console.log("sin30 =", Math.sin(30 * deg2Rad));
console.log("cos60 =", Math.cos(60 * deg2Rad));
console.log("tan60 =", Math.tan(60 * deg2Rad));
console.log("sqrt(3) =", Math.sqrt(3));
console.log("arctan(sqrt(3)) =", Math.atan(Math.sqrt(3)) * rad2Deg);

console.log("e =", Math.E);
console.log("log e =", Math.log(Math.E));

console.log();
console.log(Math.max(2, 3));
console.log(Math.min(-4, 12));
console.log(Math.round(6.71231));
console.log(Math.ceil(1.2));
console.log(Math.floor(5.82));

let value = Math.random() * 8;
console.log(value);