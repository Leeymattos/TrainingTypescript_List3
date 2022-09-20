"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Horse = void 0;
const Animal_1 = require("./Animal");
class Horse extends Animal_1.Animal {
    constructor(name, idade) {
        super(name, idade);
    }
    emitSound() {
        console.log(`O cavalo ${this.name} rugiu!`);
    }
    run() {
        console.log(`O cavalo ${this.name} está correndo!`);
    }
}
exports.Horse = Horse;
