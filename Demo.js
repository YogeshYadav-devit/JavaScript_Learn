"use strict";
exports.__esModule = true;
exports.stnName1 = void 0;
exports.stnName1 = "yogesh";
var myNum;
// myNum ="dfdsf";
myNum = 23;
myNum = 34.5;
// emp= 'sadfdsf';
var temp;
temp = "dfdasf";
temp = "Yogesh";
var array;
// array =[2,"ere,",'afdfdf'];
array = ["yogesh", "ere,", 'afdfdf'];
console.log(array);
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//type Assertion 
//type assertionhave two forms.
var empName = "Yogesh";
var stnName;
empName.length;
stnName = "Yogesh";
stnName.length;
console.log(stnName.length);
//first method is assertion
stnName.length;
console.log(stnName.length);
//second method is assertion
stnName.length;
console.log(stnName.length);
//  => arrow function
// It is called the fat arrow and also called a lambda function
// function use in javascript
var empDetails = function (emp) {
    console.log(emp);
};
// function in typescript
var empDetail = function (emp) { console.log(emp); };
empDetail = function (emp) { return console.log(emp); };
// interface in typescript
var fun = function (firstName, lastname) {
    console.log(firstName);
};
fun("yogesgh", "dfdd");
// fun(3,2);
// fun("yogesh",4);
var fun1 = function (firstName, lastname) {
    console.log(firstName + '');
};
fun1("yogesgh", "dfdd");
fun1(3, 2);
fun1("yogesh", 4);
// EmpProp accept all type of data that is no good beacuse full name and last name is string but iss method se hm kisi bhi type ke data ko pass kr skte hai 
var fun2 = function (EmpProp) {
    console.log(EmpProp.firstName + '');
};
fun2({
    firstName: "stfdsf",
    lastname: 6
});
// remove the problem
// EmpProp :{firstName: string, lastname: string} error because 
var fun3 = function (EmpProp) {
    console.log(EmpProp.firstName + '');
};
fun3({
    firstName: "yogesg",
    lastname: "rao"
});
var fun4 = function (empDetails1) {
    console.log(empDetails1.firstName + " " + empDetails1.lastname + "" + empDetails1.phone_No);
};
fun4({
    firstName: "yogesh",
    lastname: "rao",
    phone_No: 453454235
});
fun4 = function (empDetails1) {
    console.log(empDetails1.firstName + " " + empDetails1.lastname + "" + empDetails1.phone_No);
};
fun4({
    firstName: "yogesh",
    lastname: "rao",
    phone_No: 453454235
});
// class in type_script
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getFirstname = function () {
        console.log("my first name" + this.firstName);
    };
    Employee.prototype.getLastname = function () {
    };
    return Employee;
}());
var employee = new Employee();
employee.firstName = "Yogesh";
employee.lastname = "Rao";
employee.getFirstname();
//constructor in typescript
var person = /** @class */ (function () {
    function person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    person.prototype.getFullName = function () {
        console.log(this.firstName + this.lastName + this.age);
    };
    return person;
}());
var person1 = new person("Yogesh", "rao");
var person2 = new person("Yogesh", "rao", 4);
person1.getFullName();
//access modifiers in typece
var PersonDetails = /** @class */ (function () {
    // private firstName: string;
    // lastName: string;
    // private age: number;
    //  constructor( name:string,lastName: string, age:number){
    //      this.firstName = name;
    //      this.lastName = lastName;
    //      this.age = age;
    //  }
    function PersonDetails(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    PersonDetails.prototype.getFullName = function () {
        console.log(this.firstName + this.lastName + this.age);
    };
    return PersonDetails;
}());
var personDetails = new PersonDetails("Yogesh", "Yog", 34);
personDetails.age = 34;
