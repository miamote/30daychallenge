//DAY 1: CREATE HELLO WORLD FUNCTION
// Write a function createHelloWorld. It should return a new function 
//that always returns "Hello World".

/**
 * @return {Function}
 */
//the file return type is function

// *** INITIAL SIMPLE ANSWER ***
// const createHelloWorld = function(){
//     return function(...args){
//         return "Hello World!";
//     }
// }

// *****************************************************

//  You can call a function in code above where the function is initialized, it does not matter.
//  This is called *FUNCTION HOISTING*: YOU MUST DECLARE FUNCTIONS WITH THE "function" SYNTAX TO DO THIS.

const createHelloWorld = function(){
    return function(...args){ 

     // (...args) is the *SPREAD OPERATOR*
        //
        return "Hello World!";
    }(); // insertion of () makes this a call to the function rather than a function 
         // itself, as it will return the string value rather than execute the function.
}

const a = createHelloWorld();

console.log(a);
//*CLOSURES*: Functions in JavaScript have access to variables outside of their scope.



