"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dog_1 = require("./dog");
const horse_1 = require("./horse");
const laziness_1 = require("./laziness");
const horse = new horse_1.Horse('chitãozinho', 24);
const dog = new dog_1.Dog('coragem', 2);
const laziness = new laziness_1.Laziness('lentinho', 4);
function emitSound(animal) {
    animal.emitSound();
}
emitSound(horse);
emitSound(dog);
emitSound(laziness);
