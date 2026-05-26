//Immediately Invoked Function Expressions(IIFE)
// for interview jb global scope ki pollution se hoti ussse thik krne ke liye we use iife


//named IIFE
(function chai(){
    console.log(`DB connected`);
    
})();

//unnamed iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("shivangi");



