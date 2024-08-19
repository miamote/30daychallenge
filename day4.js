// DAY 4: APPLY TRANSFORM OVER EACH ELEMENT IN AN ARRAY
// Given an integer array 'arr', and a mapping function 'fn',
// return a new array with a transformation applied to each element.
// The return array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solive it without the built-in 'Array.map' method.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @param {number[]}
 */

// USING BUILT-IN ARRAY.MAP FUNCTION SOLUTION

// var map = function(arr, fn){
//     return arr.map(fn);
// };

//The map function is from functional programming. vs procedural programming
// There is no state in functional programming, no variables

//======================================================

// ITERATION SOLUTION

var map = function(arr, fn){
    // for(const n in arr){
    //     n = index
    // }
    const result = []; //const just means we cannot reassign it, but we can modify it
    
    for(const i in arr){ //the 'in' keyword is looking for an integer but in this case, i is a string of the index -> to fix this we cast it as a Number()
        result.push(fn(arr[i], Number(i))); //calling fn, passing in element array at index i and the index itself
    }
    return result;

};

//=========================================================

// THE STRATEGY DESIGN PATTERN - allows us to augment behavior of an object or a class
// Function programming vs Procedural Programming
// No state, no variables

// var map = function(arr, fn){
//     const res = new Array(arr.length); //dynamic arrays

//     for(const i in arr){
//         result[i] = fn(arr[i], Number(i));
//     }
//     return result;
// };
