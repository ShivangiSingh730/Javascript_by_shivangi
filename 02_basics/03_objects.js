// singleton 
// whenever we use constructor then always singleton is obtained 
// when we use object literals then no singleton is there



// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = { 
    name : "shivangi",
    "full name" : "shivangi chaudhary",
    [mySym]: "mykey1",
    age : 18,
    location : "delhi",
    email : "pv8893148@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "shivangi@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "shivi@micro.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");

}
jsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`);   // string pollation  `` backticks

}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


