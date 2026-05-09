const name = "shivangi"
const repocount = 50

// console.log(name+repocount+" value");


//string interpollation
console.log(`Hello  my name is ${name} and my repo count is ${repocount}`)

const gameName  = new String('shivangihc')

// console.log(gameName[0]);
// console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,4)
console.log(newString)

const anotherstring=gameName.slice(-8,4)
console.log(anotherstring)

const newStringOne = "    shivangi     "
console.log(newStringOne);
console.log(newStringOne.trim())

const url="https://shivi.com/shivangi%20chaudhary"
console.log(url.replace('%20','_'))
console.log(url.includes('shivi'))

console.log(url.split('.'));