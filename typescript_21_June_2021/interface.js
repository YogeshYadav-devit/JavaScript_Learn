var array1;
array1 = ['adda', 'dafadf', 'dadfd'];
array1[1] = 'af';
for (var i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}
// readonly array
var readOnlyArrY = array1;
// readOnlyArrY[1]="sadfaf";
// readOnlyArrY.push("adf");
for (var i_1 = 0; i_1 < readOnlyArrY.length; i_1++) {
    console.log(readOnlyArrY[i_1]);
}
// comvert readonly array to normal array
array1 = readOnlyArrY;
var Three = /** @class */ (function () {
    function Three() {
        this.p = "Hello";
    }
    return Three;
}());
var x = { p: "hi" };
var two = x;
two = new Three();
// union 
function start(// arg: string | string[] | (() => string) | { s: string } is a type of variable
arg) {
    // this is super common in JavaScript
    if (typeof arg === "string") {
        return commonCase(arg);
    }
    else if (Array.isArray(arg)) {
        return arg.map(commonCase).join(",");
    }
    else if (typeof arg === "function") {
        return commonCase(arg());
    }
    else {
        return commonCase(arg.s);
    }
    function commonCase(s) {
        // finally, just convert a string to another string
        return s;
    }
}
var PersonDetail10 = function (empDetails1) {
    console.log(empDetails1.firstName + " " + empDetails1.lastname + "" + empDetails1.phone_No);
};
PersonDetail10({
    firstName: "yogesh",
    lastname: "rao",
    phone_No: 453454235
});
var employee1 = {};
employee.name = "John"; // OK
employee.code = 123; // OK
console.log(employee1.name);
var kv1 = { key: 1, value: "Steve" }; // OK
var kv2 = { key: 1, val: "Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'
var kv3 = { key: 1, value: 100 }; // Compiler Error: 
