"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Animal_1 = require("./Animal");
class Dog extends Animal_1.Animal {
    constructor(name, age) {
        super(name, age);
    }
    emitSound() {
        console.log(`Cachorro ${this.name} Latiu!`);
    }
    run() {
        console.log(`Cachorro ${this.name} está correndo!`);
    }
}
exports.Dog = Dog;
