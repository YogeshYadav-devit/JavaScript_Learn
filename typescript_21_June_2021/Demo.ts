export
var stnName1 : string="yogesh"
let myNum:number;
// myNum ="dfdsf";
myNum =23;
myNum =34.5;
// emp= 'sadfdsf';
let temp: string;
temp = "dfdasf";
temp="Yogesh";
let array:string[];
// array =[2,"ere,",'afdfdf'];
array =["yogesh","ere,",'afdfdf'];
console.log(array);
for (let i = 0; i < array.length; i++){
    console.log(array[i])
}

//type Assertion 
//type assertionhave two forms.
let empName="Yogesh";
empName.length;
let stnName;
stnName="Yogesh";
stnName.length;
console.log(stnName.length);
//first method is assertion
(<string>stnName).length;
console.log((<string>stnName).length);
//second method is assertion
(stnName as string).length;
console.log((stnName as string).length);

//  => arrow function
// It is called the fat arrow and also called a lambda function

// function use in javascript
var empDetails= function( emp){
    console.log(emp)
}
// function in typescript
let empDetail= (emp) => {console.log(emp);}

empDetail =(emp)=> console.log(emp);



// interface in typescript
let fun = ( firstName:string, lastname:string)=>{
    console.log(firstName)
}
fun("yogesgh","dfdd");
// fun(3,2);
// fun("yogesh",4);
let fun1 = ( firstName, lastname)=>{
    console.log(firstName+'')
}

fun1("yogesgh","dfdd");
fun1(3,2);
fun1("yogesh",4);
// EmpProp accept all type of data that is no good beacuse full name and last name is string but iss method se hm kisi bhi type ke data ko pass kr skte hai 
let fun2 = (EmpProp)=>{
    console.log(EmpProp.firstName+'')
}
fun2({
    firstName: "stfdsf",
    lastname: 6,


});
// remove the problem
// EmpProp :{firstName: string, lastname: string} error because 
let fun3= (EmpProp :{firstName: string, lastname: string})=>{
    console.log(EmpProp.firstName+'')
};
fun3({
    firstName: "yogesg",
    lastname:"rao"
});
// fun3({
//     firstName: 4,
//     lastname:"rao"
// });

// remove the problem (EmpProp :{firstName: string, lastname: string}) by using interface
interface empDetails1{
    firstName:string,
    lastname:string,
    phone_No:number
}
let fun4= (empDetails1: empDetails1)=>{
    console.log(empDetails1.firstName+" "+empDetails1.lastname+ ""+empDetails1.phone_No);
}
fun4({
    firstName:"yogesh",
    lastname:"rao",
    phone_No:453454235

})
// some issue beause maine fun4 me phone_No add nhi kya toh error show hogi toh isse remove krne ke liye option peameter use krte hai  
// fun4({
//     firstName:"yogesh",
//     lastname:"rao",
   

// });
// use of option perameter

interface empDetails1{
    firstName:string,
    lastname:string,
    phone_No:number
}
 fun4= (empDetails1: empDetails1)=>{
    console.log(empDetails1.firstName+" "+empDetails1.lastname+ ""+empDetails1.phone_No);
}
fun4({
    firstName:"yogesh",
    lastname:"rao",
    phone_No:453454235

})
// class in type_script
class Employee{
     firstName : string;
     lastname: string;
     age: number;
     getFirstname(){
         console.log("my first name"+ this.firstName)
    
    }
    getLastname(){

    }

}
let employee = new Employee();
employee.firstName ="Yogesh";
employee.lastname ="Rao";
employee.getFirstname();



//constructor in typescript
class person{
    firstName: string;
    lastName: string;
    age: number;
    constructor(firstName:string, lastName:string,age?:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age= age;
    }
    getFullName(){
      console.log( this.firstName+ this.lastName+ this.age)  ;
    }
}
 let person1 = new person("Yogesh","rao");
 let person2 = new person("Yogesh","rao",4);
 person1.getFullName();

 //access modifiers in typece
 class PersonDetails{
    // private firstName: string;
    // lastName: string;
    // private age: number;
    //  constructor( name:string,lastName: string, age:number){
    //      this.firstName = name;
    //      this.lastName = lastName;
    //      this.age = age;

    //  }
    constructor(private firstName:string,private lastName:string,public age:number){

    }
     getFullName(){
        console.log( this.firstName+ this.lastName+ this.age)  ;
      }
 }

 let personDetails = new PersonDetails("Yogesh", "Yog",34);
personDetails.age = 34;