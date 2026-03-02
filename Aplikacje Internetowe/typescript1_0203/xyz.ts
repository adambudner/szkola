function sum(a:number, b:number) {
    return a+b;
}

console.log(sum(5, 10));

function square(arr : number[]): number[] {
    const array = arr.map(x=>x**2);
    return array;
}
console.log(square([2,4,6]))