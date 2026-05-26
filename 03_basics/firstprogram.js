//  Javascript Execution Context
//  {} => Global execution  context is(this)
//  Function Execution context
//  Eval Execution context


//  {}  ->  memory creation phase
//  execution phase

let val1=10
let val2=5
function addNum(num1,num2){
    let total =num1+num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)
