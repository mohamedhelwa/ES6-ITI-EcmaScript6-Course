/* Question 1 */

export var myObj = {
  name: "Mohamed",
  address: "Giza",
  age: 12
} 

export var handler = {
    get: function(target, property) {
        if(!(property in target)){
            throw(`${property} property doesn't exit!`);
        }
        return target[property];
    },
    set: function(target, property, value) {
        if (property === "name") {
            if (typeof value != "string") {
                throw("Name value should be a String!");
            } 
            else if(value.length != 7){
                throw("Name value should be only 7 characters!");
            } 
        }

        else if (property === "address") {
            if (typeof value != "string") {
                throw("Address value should be a String!")
            }
        }

        else if (property === "age") {
            if (!(Number.isInteger(value))) {
                throw("Age value should be integer numbers only!");   
            }
            else if (value <= 25 || value >= 60) {
                throw("Age value should be between 25 and 60")
            }
        }
        target[property] = value;
        return true;
    }
}




/* Question 2 */

class shape {
    constructor(height){
        this.height = height;
    }

    calcArea() {}
    calcPerimeter() {}

    toString() {
        console.log(`${this.constructor.name} Area = ${this.calcArea()} \n${this.constructor.name} Perimeter = ${this.calcPerimeter()}`);
    }
}

export class square extends shape {
    constructor(height) {
        super(height);
    }

    calcArea() {
        return this.height * this.height;
    }

    calcPerimeter() {
        return 4 * this.height;
    }
}

export class rectangle extends shape {
    constructor(height, width) {
        super(height);
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }

    calcPerimeter() {
        return 2 * (this.height + this.width);
    }
}

export class circle extends shape {
    constructor(radius) {
        super(radius);
    }

    calcArea() {
        return Math.PI * this.height * this.height;
    }

    calcPerimeter() {
        return 2 * Math.PI * this.height;
    }
}
