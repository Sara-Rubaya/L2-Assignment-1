// const name1 : string = "Sara Rubaya";
// console.log(name1);

// Problem-1
function filterEvenNumbers(numbers: number[]) : number[]{
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7]));