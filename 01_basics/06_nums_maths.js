const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); //return 1.12e+3 if 1123.8966 and precision is 3

const hundreds  = 1000000
console.log(hundreds.toLocaleString('en-IN'));