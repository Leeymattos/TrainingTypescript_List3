import { Animal } from "./Animal";
import { EmitSound } from "./IEmitSound";
import { Run } from "./IRun";

export class Horse extends Animal implements EmitSound, Run {

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