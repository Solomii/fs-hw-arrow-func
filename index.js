"use strict";
/* написати функцію яка приймає масив і повертає масив з двох значень, які є мінімальним і максимальним значенням джерельного масиву якщо джерельний масив порожній, то функція повертає порожній масив
 */

const num = [1, 2, 3, 5, 4, 65];
const num3 = [35, 1];
const num2 = [];
/**
 * return min and max value from array
 * @param  {...number} num
 * @returns {number | []}
 */
const getMinMaxValueFromArray = (...num) => {
    if (num.length === 0) {
        return [];
    }

    return num.reduce(() => {
        return [Math.min.apply(null, num), Math.max.apply(null, num)];
    });
};

console.log(getMinMaxValueFromArray(...num));
console.log(getMinMaxValueFromArray(...num2));
console.log(getMinMaxValueFromArray(...num3));

/*2)написати функцію стрілку, яка приймає безліч аргументів і повертає результат їх множення, якщо аргументів не має - повертає null*/

/**
 * get multiple all numbers in array
 * @param  {...number} num
 * @returns {number | null}
 */
const getMultipleAllNumbers = (...num) => {
    if (num.length === 0) {
        return null;
    }

    return num.reduce((acc, current) => acc * current);
};

console.log(getMultipleAllNumbers(...num));
console.log(getMultipleAllNumbers(...num2));
console.log(getMultipleAllNumbers(...num3));

/*
3)переписати функцію, що нижче на функцію стрілку
function askUser(quetion){
const userInput = confirm(quetion);
if(userInput){
return 'ok';
}
return 'error';
}
 */

// const askUser = (quetion) => {
//   if(confirm(quetion)){
//      return "ok";
//   }
//   return "error"
// }

/**
 * ask user question
 * @param {string} quetion 
 * @returns {string}
 */
const askUser = (quetion) => (confirm(quetion) ? "ok" : "error");

console.log(askUser());
