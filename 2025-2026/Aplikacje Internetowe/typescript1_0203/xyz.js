function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10));
function square(arr) {
    const array = arr.map(x => x ** 2);
    return array;
}
console.log(square([2, 4, 6]));
class Uczen {
    constructor(imie, nazwisko, matOceny) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.matOceny = matOceny;
    }
    wyswietlDaneUcznia() {
        return `Dane ucznia: 
        imie: ${this.imie}
        nazwisko: ${this.nazwisko}
        oceny: ${this.matOceny.join(", ")}
        `;
    }
}
const uczen1 = new Uczen("Jan", "Kowalski", [1, 2, 3, 4, 5, 6, 7]);
console.log(uczen1.wyswietlDaneUcznia());
export {};
//# sourceMappingURL=xyz.js.map