// DAY 5: FILTER ELEMENTS FROM ARRAY
// Given an integer array 'arr' and a filtering function 'fn',
// return a new array with a fewer or equal number of elements.
// The returned array should only contain elements where fn(arr[i], i)
// evaluated to a truthy value.
// Please solive it without the built-in 'Array.filter' method.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// USING THE BUILT-IN ARRAY.FILTER SOLUTION

var filter = function(arr, fn){
// declarative programming
    arr.filter((n, i) =>{
        return n > 10;
    }) // n is the value, i is the index

    // equilavent to the body above, doesn't require
    // arr.filter((n, i) => n > 10);

};

//====================================

// SOLUTION WITHOUT BUILT-IN ARRAY.FILTER

var filter = function(arr, fn){
//imperative programming
    const result = [];

    for(let i = 0; i < arr.length; i++){ //this is a bit faster than using below line
    //for(const i in arr){ // we want index, so we use 'in'
        if(fn(arr[i],Number[i])){
            result.push(arr[i]);
        }
    }
    return result;
};