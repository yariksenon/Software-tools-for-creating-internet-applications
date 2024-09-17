//3
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

//4
const square = new Rectangle(10, 10);
document.writeln(square.calcArea()); // 100

//5
class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

//6
class Person {
    #name;
    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}
const person3 = new Person("John");
document.writeln(person3.getName()); // John

//7
class MathUtils {
    static square(number) {
        return number * number;
    }
}
document.writeln(MathUtils.square(4)); // 16

//8
class User {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}
const user = new User("Alice");
document.writeln(user.name); // Alice
user.name = "Bob";
document.writeln(user.name); // Bob

//9-10
// Инкапсуляция
class Person1 {
    #name;
    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}
const person2 = new Person1("John");
document.writeln(person2.getName()); // John

// Наследование
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        document.writeln(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        document.writeln(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.

// Полиморфизм
class Bird {
    fly() {
        document.writeln("Bird is flying");
    }
}

class Eagle extends Bird {
    fly() {
        document.writeln("Eagle is flying high");
    }
}

class Penguin extends Bird {
    fly() {
        document.writeln("Penguin can't fly");
    }
}

const birds = [new Bird(), new Eagle(), new Penguin()];
birds.forEach(bird => bird.fly());
// Bird is flying
// Eagle is flying high
// Penguin can't fly
