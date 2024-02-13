//Given a function fn, return a new function that is identical to the original 
// function except that it ensures fn is called at most once.

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */


var once = function(fn) {
    let used = false;
    return function (...args) {
        if (!used) {
            used = true;
            return fn(...args);
        }
    }
};

let onceFn = once(fn = (a,b,c) => (a + b + c))

console.log(onceFn(1,2,3))
console.log(onceFn(2,3,6))