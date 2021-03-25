////////////////
/* Question 1 */
////////////////


var x = prompt("Enter the 1st number: ");
var y = prompt("Enter the 2nd number: ");

document.write(`1st = ${x}<br>`);
document.write(`2nd = ${y}<br><br>`);

//using destructuring
[x, y] = [y, x];

document.write(`The value of 1st after swapping = ${x}<br>`);
document.write(`The value of 2nd after swapping = ${y}<br><hr>`);



////////////////
/* Question 2 */
////////////////


let arr = [1, 20, 13, 4, -5, 9, 7];

/* Spread operator */
function max(myArr) {
    return Math.max(...myArr);
}
function min(myArr) {
    return Math.min(...myArr);
}

var a = max(arr);
console.log(a);

var b = min(arr);
console.log(b);

/* Rest parameter */
document.write(`[${arr}]<br><br>`);
document.write(`Max value = ${Math.max(1, ...arr)}<br>`);
document.write(`Min value = ${Math.min(1, ...arr)}<br><hr>`);


////////////////
/* Question 3 */
////////////////


var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

/* 3.A */
function check(arr) {
    return arr.every(i => (typeof i === "string"));
}

document.write(`a: => ${check(fruits)} <br><br>`);


/* 3.B */
let contains = fruits.some(i => (i.startsWith('a')));
document.write(`b: => ${contains} <br><br>`);


/* 3.C */

let result = fruits.filter(i => (i.startsWith('a') || i.startsWith('s')));
document.write(`c: => ${result} <br><br>`);


/* 3.D */

let liked = fruits.map(x => "I like " + x)
document.write(`d: => ${liked} <br><br>`);

/* 3.E */

document.write(`e: => <br>`);
liked.forEach((el) => document.write(el + '<br>'))