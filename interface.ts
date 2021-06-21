let array1:string[];
array1 = ['adda','dafadf','dadfd'];
array1[1]='af';
for (var i = 0; i < array1.length; i++){
    console.log(array1[i]);
}
// readonly array
let readOnlyArrY: ReadonlyArray<string> = array1;
// readOnlyArrY[1]="sadfaf";
// readOnlyArrY.push("adf");
for (let i = 0; i <readOnlyArrY.length; i++){
    console.log(readOnlyArrY[i]);
}

// comvert readonly array to normal array
array1 = readOnlyArrY as string[];


// struct use in typescript

type one={
    p:string;
}

interface Two {
  p: string;
}
class Three {
  p = "Hello";
}

let x: one = { p: "hi" };
let two: Two = x;
two = new Three();

// union 
function start(// arg: string | string[] | (() => string) | { s: string } is a type of variable
    arg: string | string[] | (() => string) | { s: string }
  ): string {//:string is a return type
    // this is super common in JavaScript
    if (typeof arg === "string") {
      return commonCase(arg);
    } else if (Array.isArray(arg)) {
      return arg.map(commonCase).join(",");
    } else if (typeof arg === "function") {
      return commonCase(arg());
    } else {
      return commonCase(arg.s);
    }
  
    function commonCase(s: string): string {
      // finally, just convert a string to another string
      return s;
    }
  }
// interface PersonDetail1{
//     firstName:string,
//     lastname:string,
//     phone_No ?: number
// }
// let PersonDetail10= (empDetails1?: empDetails1)=>{
//     console.log(empDetails1.firstName+" "+empDetails1.lastname+ ""+empDetails1.phone_No);
// }
// PersonDetail10({
//     firstName:"yogesh",
//     lastname:"rao",
//     phone_No:453454235

// })
interface Employee { 
  name: string; 
  code: number; 
} 

let employee1 = <Employee> { }; 
employee.name = "John"; // OK
employee.code = 123; // OK
console.log(employee1.name)


interface KeyPair {
  key: number;
  value: string;
}

let kv1: KeyPair = { key:1, value:"Steve" }; // OK

let kv2: KeyPair = { key:1, val:"Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'

let kv3: KeyPair = { key:1, value:100 }; // Compiler Error: 
