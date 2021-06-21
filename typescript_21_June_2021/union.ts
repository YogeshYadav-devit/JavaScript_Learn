export
let CarName: string|number;
CarName= "Audi"
console.log(typeof(CarName));
CarName=1232;
console.log(typeof(CarName));
let arrayName: string[]|number[];
arrayName=[1.2,3,23545];
console.log(typeof(arrayName));
arrayName=["Yogesh","rao"];
console.log(typeof(arrayName));

// any type 
let something: any = "Hello World!"; 
console.log(typeof(something));
something = 23;
console.log(typeof(something));
something = true;
console.log(typeof(something));
// type of any array
let arr: any[] = ["John", 212, true]; 
arr.push("Smith"); 
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 
