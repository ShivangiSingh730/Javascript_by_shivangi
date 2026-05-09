// datatypes are of two types
//1) Primitive data type

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedtIn = false
const outsideTemp = null
let userEmail; // undefined hi hai by default

const id = Symbol('123')
const anotherid  = Symbol('123')

console.log(id == anotherid)
const bigNumber = 233343556665879n // this number is convert into BIGINT


//2) Reference or non-primitive data type 

//Array,Objects,Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name : "shivangi",
    age : 21,
}

const myfunction = function(){
    console.log("hello world");
}
console.log(typeof bigNumber);// return type is undefined
console.log(typeof outsideTemp);// return type is  object
console.log(typeof scoreValue);// return type is number
console.log(typeof myfunction);// return type is function object
console.log(typeof anotherid);// return type is Symbol


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack memory is used (Primitive) , Heap memory is used (Non-Primitive)

let myUtubename = "shivangi9404"
let anothername = myUtubename
anothername="chaiaurcode"
console.log(myUtubename)
console.log(anothername);

let userOne = {
    email:"pv8893148@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "shivi@google.com"
console.log(userOne.email)
console.log(userTwo.email)// both return shivi@google.com

