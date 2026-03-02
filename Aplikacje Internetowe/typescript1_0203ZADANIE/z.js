class Samochod {
    constructor(marka, model) {
        this.marka = marka;
        this.model = model;
    }
    display() {
        return `
            Marka : ${this.marka}
            Model: ${this.model}
        
        `;
    }
}
const sam = new Samochod("Ford", "Mustang");
console.log(sam.display());
export {};
//# sourceMappingURL=z.js.map