"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Laziness = void 0;
const Animal_1 = require("./Animal");
class Laziness extends Animal_1.Animal {
    constructor(name, age) {
        super(name, age);
    }
    climb() {
        console.log(`O bixo preguiça ${this.name} está subindo na árvore!`);
    }
    emitSound() {
        console.log(`O bixo preguiça ${this.name} emitiu um som!`);
    }
}
exports.Laziness = Laziness;
