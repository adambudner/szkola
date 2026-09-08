function sum(a:number, b:number) {
    return a+b;
}

console.log(sum(5, 10));

function square(arr : number[]): number[] {
    const array = arr.map(x=>x**2);
    return array;
}
console.log(square([2,4,6]));

class Uczen {
    imie:string;
    nazwisko:string;
    matOceny:number[];

    constructor(imie:string,nazwisko:string,matOceny:number[]) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.matOceny = matOceny;
    }

    wyswietlDaneUcznia(){
        return `Dane ucznia: 
        imie: ${this.imie}
        nazwisko: ${this.nazwisko}
        oceny: ${this.matOceny.join(", ")}
        `;
    }
}

const uczen1 = new Uczen("Jan", "Kowalski", [1,2,3,4,5,6,7]);

console.log(uczen1.wyswietlDaneUcznia());


