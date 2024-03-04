promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

var addTwoPromises = async function(promise1, promise2) {
   const result1 = await promise1;
   const result2 = await promise2;
   return console.log(result1 + result2);
};

/* another way to get the result 
var addTwoPromises = async function(promise1, promise2) {
    const result = Promise.all([promise1,promise2]).then((values)=>values[0]+values[1]);
    return result;
};
*/



addTwoPromises(promise1, promise2)
