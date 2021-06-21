function EmpDetail(person, address) {
    console.log(typeof person);
    console.log(typeof address);
    console.log(person + " " + address);
}
empDetail(2);
// empDetail(,df);
// empDetail(2343,"Yogesh");
function EmpDetail1(person, address) {
    console.log(person + " " + address);
}
EmpDetail1("Yogesh", "vishal");
// EmpDetail1("Yogesh");
// EmpDetail1(2343,"Yogesh");
function EmpDetail2(person, age, address) {
    console.log(person + " " + address);
}
EmpDetail2("Yogesh", 34, "rao");
// EmpDetail2("Yogesh","vishal",34);
EmpDetail2("Yogesh", 43);
// EmpDetail2(2343,"Yogesh");
var EmpDetail3 = function (firstName, lastName) {
    return firstName;
};
console.log(EmpDetail3("Yogesh", "vishal"));
var EmpDetail4 = function () { return console.log("hello Yogesh"); };
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
