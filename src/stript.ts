import { Dog } from "./dog";
import { EmitSound } from "./IEmitSound";
import { Horse } from "./horse";
import { Laziness } from "./laziness";


const horse = new Horse('chitãozinho', 24);
const dog = new Dog('coragem', 2);
const laziness = new Laziness('lentinho', 4);


function emitSound(animal: EmitSound) {
    animal.emitSound();
}


emitSound(horse);
emitSound(dog);
emitSound(laziness);