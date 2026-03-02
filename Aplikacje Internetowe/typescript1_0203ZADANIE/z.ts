class Samochod {
    marka:string;
    model:string;

    constructor(marka:string, model:string) {
        this.marka = marka;
        this.model = model;
    }

    display(){
        return `
            Marka : ${this.marka}
            Model: ${this.model}
        
        `;
    }
}

const sam = new Samochod("Ford", "Mustang");
console.log(sam.display());
