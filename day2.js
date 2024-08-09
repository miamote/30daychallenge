// DAY 2: Counter
// Given an integer 'n', return a 'counter' function. This 'counter' function
// intially returns 'n' and then returns 1 more than the previous value 
// every subsequent time it is called '(n, n+1, n+2, etc)'.

// *** INITIAL CODE: Closure Solution

/**
 * @param {number} n
 * @return {Function} counter
 */

// var createCounter = function(n) {
//     return function(){
//         return n++; // this returns n, and then increments it by 1. 
//                     // so it will return 1 if starting at 1, but be set to 2.
//     };
// };

//version 2 - similar to OOP from other languages

var createCounter = function(n){
    let count = n;

    return function(){
        return count++;
    };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

//**********************************

// *** Class Solution:

class Counter {
    constructor(n){
        this.n = n;
    }

    increment(){ // in classes, you do not need the 'function' keyword to create a function
        return this.n++;
    }
}

const counter = new Counter(10);
console.log(counter);
counter.increment(); // 10
console.log(counter);
counter.increment();
console.log(counter);
