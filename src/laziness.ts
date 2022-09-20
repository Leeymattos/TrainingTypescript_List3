import { Animal } from "./Animal";
import { ClimbTree } from "./IClimbTrees";
import { EmitSound } from "./IEmitSound";

export class Laziness extends Animal implements ClimbTree, EmitSound {

    constructor(name: string, age: number) {
        super(name, age);
    }

    climb(): void {
        console.log(`O bixo preguiça ${this.name} está subindo na árvore!`);
    }

    emitSound(): void {
        console.log(`O bixo preguiça ${this.name} emitiu um som!`);
    }
}