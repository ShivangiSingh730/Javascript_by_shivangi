function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("G");
    console.log("I"); 
}
// sayMyName()

 //number1 and number2 are here parameters
// function addTwoNumbers(number1,number2)
// {
//     console.log(number1+number2);
    
// }

function addTwoNumbers(number1,number2)
{
    // let result = number1+number2;
    // return result;
    return number1+number2;
}

const result = addTwoNumbers(9,5)  // passing arguments 9 & 5 in function
// console.log("Result: ",result);



function loginUserMessage(username)
{
    if(username === undefined)
    {
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("sameer"));
// console.log(loginUserMessage());


function calculateCartPrice(vla1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));
 
//objects
const user={
    username: "shivangi",
    prices: 199
}
function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user)
handleObject({
    username:"sameer",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

