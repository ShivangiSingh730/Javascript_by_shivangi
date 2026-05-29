const coding = ["js", "cpp" ,"java" ,"pyhton" ,"ruby"]

// coding.forEach( function (val) {
//     console.log(val); 
// } )

// coding.forEach((item) => {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


const myCoding = [
    {
        languageName : "javascript",
        languangeFileName : "js"
    },
    {
        languageName : "java",
        languangeFileName : "java"
    },
    {
        languageName : "c++",
        languangeFileName : "cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})