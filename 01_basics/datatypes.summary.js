// datatypes are of two types
//1) Primitive data type

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedtIn = false
const outsideTemp = null
let userEmail;

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
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myfunction);
console.log(typeof anotherid);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive) , Heap(Non-Primitive)

let myUtubename = "shivangi9404"
let anothername = myUtubename
console.log(anothername);
