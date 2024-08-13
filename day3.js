// DAY 3: Counter 2
// Write a function 'createCounter'. It should accept an initial integer 'init'.
// It should return an object with three functions:
// 1. increment(): increases the current value by 1 and then returns it.
// 2. decrement(): reduces the current value by 1 and then returns it.
// 3: reset(): sets the current value init and then returns it.

/** 
* @param {integer} init 
* @return { increment: Function, decrement: Function, reset: Function}
*/

// FUNCTION SOLUTION
var createCounter = function(init){

    // any methods defined in here will all have access to 'init' and the shared copy of 'init'
    // every time a new object is created.

    // create another variable for the count to be able and reset to init count.
    let count = init;

    function increment(){
        return ++count;
    }

    function decrement(){
        return --count;
    }

    function reset(){
        count = init;
        return count;
    }

    return{
        //increment: increment,
        //decrement: decrement,
        //reset: reset
        // in Javascript it is possible to type the name just once when the key and value are the same name.
        // So to simplify, we can do this:
        increment,
        decrement,
        reset
    }
};

//================================================================
// CLASS SOLUTION

class Counter{

    constructor(init){
        this.init = init;
        this.count = init;
    }

    increment(){
        return ++this.count;
    }

    decrement(){
        return --this.count;
    }

    reset(){
        this.count = this.init;
        return this.count;
    }
};