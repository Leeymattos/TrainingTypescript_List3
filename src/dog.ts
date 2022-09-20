import { Animal } from "./animal";
import { EmitSound } from "./emitSound";
import { Run } from "./Run";

class Dog extends Animal implements EmitSound, Run {

    constructor(name: string, age: number) {
        super(name, age);
    }


    public emitSound(): void {
        console.log(`Cachorro ${this.name} Latiu!`);
    }

    public run(): void {
        console.log(`Cachorro ${this.name} está correndo!`);
    }

}