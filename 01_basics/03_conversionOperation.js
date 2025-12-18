let score = "33abc"

// const {score}= req.body
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) //type conversion
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
//"33abc" => NaN
// true => 1; false => 0

let isLoggedtIn = "Hitesh"
let booleanisloggedout = Boolean(isLoggedtIn)
console.log(booleanisloggedout);

// 1 => true;  0 => false
// "" => false
// "hitesh" => true

let somenumber = 33;
let stringnumber = String(somenumber)
console.log(stringnumber);
console.log(typeof stringnumber);

