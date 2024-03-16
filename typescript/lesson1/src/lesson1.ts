// Data types in TYPESCRIPT
let userName: string = "Bobur"; // string
let userAge: number = 19; // number
let userIsStudent: boolean = true; // boolean
let userMarried: undefined = undefined; // undefined
let userCredentials: null = null; // null
let userExperience: object = {}; // object
let vegetables: [] = []; // array
let fruits: object[] = [{}]; // object array

// Advanced Data Types
// 1. Tuple
// Express an array where the type of a fixed number of elements is known, but not the same
// You cannot write more than what is known inside array
let x: [string, number, boolean, []];
x = ["apple", 10, false, []]; 

// 2. Enum
// More friendly names for numeric values
enum Color { Red, Green, Blue };
let c: Color = Color.Blue; // 2

// 3. Any
// When we do not know about the data types that are coming we use any to accept all the data types.
let notSure: any = 4; 
notSure = "This is string"; // from 4 it changed it to string
console.log(notSure)

// 4. Void
// The functions that will not return any value?
function func1(): void {
    console.log(c) // 2
    console.log(Color.Red) // 0
    // return c + Color.Red; // we cannot return any value 
}

// 5. Never
// Values that never occur. Function expression and Arrow function that throws exception or never returns
const funcNever = (): never => {
    throw new Error("ERROR");
}
// funcNever();

// 6. Union types
// Variable that can be multiple types of data types
let multiType: number | boolean;
multiType = 20; // or can true/false

// 7. Type Aliases | Interfaces
type Name = string;
let adminName: Name = "Admin";
console.log(adminName)

// 8. Literal Types 
// I believe its good to use it with CSS 
type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between" | "space-evenly" | "space-around";
let navbar: JustifyContent = "space-between";

// 9. Type Assertion
// I do not know where exactly to use it :(
let someValue: any = "hello, world";
let strLength: number = (someValue as string).length;
// console.log(strLength);



// INTERFACES
// What kind of data types there will be in the object
interface Student {
    name: string;
    surname: string;
    age: number;
    isMarried: boolean;
}
// So Student object that is coming from server should have this data types else it will throw an error



export { func1 }