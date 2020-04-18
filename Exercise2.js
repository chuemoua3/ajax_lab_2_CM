/*Exercise 2
Date: 4/18/2020
Write a function, testNum, that takes a number as an argument and returns a Promise that tests if the value is less than or greater than 50.
*/

function testNum(number){
    return new Promise(function(resolve, reject){
        if (number > 50){
            resolve(number + " is greater than 50.")
        }else if (number < 50){
            resolve(number + " is less than 50.")
        }else{
            reject("Uh oh, the input value is not a number.")
        }
    });
};  

testNum(100).then((results)=>{
    console.log(results);
}).catch((err)=>{
    console.error(err);
});

testNum(45).then((results)=>{
    console.log(results);
}).catch((err)=>{
    console.error(err);
});
