let person1 = {
    name: 'Kim',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    },
}
person1.sayHello();

let person2 = {
    name: 'Anna',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    },
}
person2.sayHello();

let person3 = {
    name: 'Seth',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    },
}
person3.sayHello();

let person4 = {
    name: 'Dustin',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    },
}
person4.sayHello();

let person5 = {
    name: 'Nyya',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    },
}

function Person(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;

}
Person.prototype.sayHello = function () {
    console.log(`Hey! My name is ${this.name} I am ${this.age} and I live in ${this.city}.`);
}

let p1 = new Person('Kim', 'Pelham', 53);
p1.sayHello();

let p2 = new Person('Anna', 'Pelham', 20);
p2.sayHello();

let p3 = new Person('Seth', 'Birmingham', 28);
p3.sayHello();

let p4 = new Person('Dustin', 'Birmingham', 28);
p4.sayHello();

let p5 = new Person('Nyya', 'Birmingham', 28);
p5.sayHello();

class P {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;

    }
}

class Vehicle {
    constructor(manufacturer, NumOfWheels) {
        this.manufacturer = manufacturer;
        this.NumOfWheels = NumOfWheels;
    }

    aboutVehicle() {
        console.log(`This Vehicle is made by ${this.manufacturer} and has ${this.NumOfWheels} . `);
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, numOfWheels, size, mpg) {
        super(manufacturer, numOfWheels);
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle() {
        console.log(`This sedan is made by ${this.manufacturer} and has ${this.NumOfWheels} an mpg of ${this.mpg} and a size of ${this.size} . `);
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer, numOfWheels, doors) {
        super(manufacturer, numOfWheels);
        this.numOfWheels = numOfWheels;
        this.doors = doors;
    }

    aboutVehicle() {
        console.log(`This motorcycle is made by ${this.manufacturer} and has ${this.NumOfWheels} and ${this.doors}? `);
    }
}


let vehicle = new Vehicle('honda', 4);
vehicle.aboutVehicle();

let vehicle2 = new Sedan('lexus', 4, 'medium', 35);
vehicle2.aboutVehicle();

let vehicle3 = new Motorcycle('harley', 2, false);
vehicle3.aboutVehicle();

