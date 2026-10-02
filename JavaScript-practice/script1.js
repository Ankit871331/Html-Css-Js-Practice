//==========================================================JavaScript Basics===============================================================



//1. Keywords --> Reserved word that have spacial meaning and can not be used in class, 
// function and variable for example break, case, catch, class, const, continue, debugger,
//  default, delete, do, else, export, extends, finally, for, function, if, import, in, instanceof, 
// let, new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield, enum,
//  implements, interface, package, private, protected, public, static, await



// 2.Identifiers --> giving name to something like let name = "Ankit", so here is name is identifiers

// 3. DataTypes --> JavaScript have 8 data types String , Number, BigInt(let bigNumber = 12345678901234567890n;), Boolean, Undefined(Undefined),
//Null, Symbol(let id = Symbol("id");),  Object, 
//Premitive DataType(Primitive data types are immutable and represent a single value. JavaScript has 7 primitive data types: String, Number, BigInt, Boolean, Undefined, Null, and Symbol.) --> String ,Number,BigInt,Boolean,Undefined,Null,Symbol
//Non-Premitive(Non-primitive data types are reference types that can store collections or more complex data. In JavaScript, Objects are non-primitive, including arrays and functions.)--> Object


//4. variable & constants
// let -> 
// var -> 
// const -> can not re-asign same value again, can not update value



//5. Tokens
//Tokens are the smallest individual units of a JavaScript program that have meaning to the JavaScript engine. The JavaScript code is broken down into tokens before it is processed.
//for Example: let age = 25;
//let    → Keyword
//age    → Identifier
//=      → Operator
//25     → Number/Literal
//;      → Punctuation


//6. Operators
//Operators are special symbols or keywords used to perform operations on values or variables. For example, + is used for addition, = is used for assignment, and === is used for strict comparison.
//a.Arithmetic operators-->+   -   *   /   %   **   ++   --
//b. Assignment operators --> =   +=   -=   *=   /=   %=   **=
//c. Comparison operators --> ==   ===   !=   !==   >   <   >=   <=
//d. Logical operators --> &&   ||   !
//e.  Ternary operator--> ? :
//f. Type operators --> typeof,instanceof
//g. Other important operators--> delete,in,new,void


//==========================================================JavaScript Descision making statement=================================================

//Conditional statement

//1. if, else if, nested if else, if else if ladder, switch case

//2. Dynamic data / Dynamic typing ->  In JavaScript, variables are dynamically typed. This means you don't have to specify the data type when declaring a variable, and the same variable can hold different types of values.
// for exmaple --> 
// let value = 10;        // Number
//value = "Hello";       // String
//value = true;          // Boolean


//3. Static typing--> In a statically typed language, the type is generally specified or determined at compile time, and a variable cannot freely change to an unrelated type.
// for exmaple: let age: 
// number = 25;
//age = "Hello"; // ❌ Error


//4. Template literals --> Template literals are a way to create strings using backticks ( ). They allow us to easily insert variables and expressions directly inside a string using ${}. They also support multi-line strings.
//for exmaple: --> let message = `My name is ${name} and I am ${age} years old.`;


//5. Type Casting --> meaning converting one data type ot another
// let newAge = Number(age);
//a. Explicit Type Casting --> convernting manually let value = "100";,umber(value);   // String → Number,String(100);     // Number → String,Boolean(1);      // Number → Boolean

//b.Implicit Type Conversio --> JavaScript automatically converts the type. 
//for example: let result = "10" + 5; onsole.log(result); -->"105" converted into number to string 

//6 Iteration statemnts or loops --> for, while, do while, 
//for in (gives the key/index) --> 
// const person = {
//     name: "John",
//     age: 25,
//     city: "Delhi"
// };

// for (let key in person) {
//     console.log(key);
// }
//Output gives all the key -> johan, 25, Delhi

//for...of → gives you the actual values
// const fruits = ["Apple", "Banana", "Mango"];

// for (let fruit of fruits) {
//     console.log(fruit);
// } 
//output: apple, banana , mango



//7. Jump statement -> continew, break

//8. Function --> 









//3. Inputs
//a. predefined -> defined variable before running code like let a= 0; and b = 9 ; and a+b
//b. userDefined -> providing variable after running code like let promt("enter your number");


// let  =  prompt("enter your name");


//3. NaN -> ans of all the arithmathic operation is NaN


//4. Operator
//a. arithmatic -> %, +, /, -
//b. relation comparison -> <, >, <=, >=, ==, !, !=
//c. assignment operator -> =, 
//unary -> ++, --

//5. Logical operator -> &&, ||, !


// let num = 11;


// let str = num.toString();
//    let sum =0;

// for(let i = 0; i<str.length; i++){

// sum = sum+ Number(str[i]);
    
// }

// console.log(sum);




//1. difference between js and ts

//js -> dynamic
//ts -> static 

//2. String
// methods of string
//a. slicing, repeate, uppercase, loweCase, replace, 

// let a = "ankit";
// a = "karan"

// console.log(a);



//3. Conditional statement

//decision, switch , loop, jump
//decision -> if, else if, if else if, nested if
//switch 

//4. ternary operator -> condition? true: false
//ex let res = (n%2 ==0)? "even": "false";

//5. 