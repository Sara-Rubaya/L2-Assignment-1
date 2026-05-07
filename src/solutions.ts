// const name1 : string = "Sara Rubaya";
// console.log(name1);

// Problem-1
function filterEvenNumbers(numbers: number[]) : number[]{
    return numbers.filter(num => num % 2 === 0);
}
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7]));


// Problem-2
function reverseString(str : string) : string{
    return str.split("").reverse().join("");
}
// console.log(reverseString("typescript"));



// Problem-3
type StringOrNumber = string | number;
function checkType(value : StringOrNumber) : "String" | "Number" {
    if( typeof value === "string"){
        return "String";
    }else{
        return "Number";
    }
}


// console.log(checkType("Sara"));



// Problem-4
function getProperty(obj : any, key : string){
    return obj[key];
}
const user = { id : 1, name : "John Doe", age : 21};
// console.log(getProperty(user, "name"));


//Problem-5
interface Book{
    title: string;
    author: string;
    publishedYear: number;
}
function toggleReadStatus(book: Book) : Book & { isRead : boolean}{
    return {...book, isRead: true};
}
const myBook = { title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
  isRead: true};
//   console.log(toggleReadStatus(myBook));