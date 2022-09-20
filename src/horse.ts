import { Animal } from "./animal";
import { EmitSound } from "./emitSound";
import { Run } from "./Run";

class Horse extends Animal implements EmitSound, Run {

    constructor(name: string, idade: number) {
        super(name, idade);
    }

    emitSound(): void {
        console.log(`O cavalo ${this.name} rugiu!`);
    }

    run(): void {
        console.log(`O cavalo ${this.name} está correndo!`)
    }
}