import { Animal } from "./animal";
import { ClimbTree } from "./ClimbTrees";
import { EmitSound } from "./emitSound";

class Laziness extends Animal implements ClimbTree, EmitSound {

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