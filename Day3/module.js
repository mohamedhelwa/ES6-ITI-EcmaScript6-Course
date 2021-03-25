import * as script from "./script.js";

//////////////////////////// Question 1 /////////////////////////////
/* Proxy test*/
var p = new Proxy(script.myObj, script.handler);
console.log(`Name: ${p.name} \nAddress: ${p.address}\nAge: ${p.age}`);

p.name = "qwertys"; // 6 characters

p.address = "cairo"; // not a string value

p.age = 30; // not a number or not an integer

console.log(`Name: ${p.name} \nAddress: ${p.address}\nAge: ${p.age}`);


//////////////////////////// Question 2 /////////////////////////////
/* New Square test*/
var square1 = new script.square(5);

square1.calcArea();
square1.calcPerimeter();
square1.toString();


/* New Rectangle test*/
var rect = new script.rectangle(10, 20);

rect.calcArea();
rect.calcPerimeter();
rect.toString();

/* New Circle test*/
var circle1 = new script.circle(10);

circle1.calcArea();
circle1.calcPerimeter();
circle1.toString();

