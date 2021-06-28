var employeeDataArray = [];
var isAdd = true;
function addEmployee() {
    let empName = document.getElementById("name").value;
    let derpartment = document.getElementById("derpartment").value;
    let designation = document.getElementById("designation").value;
    let salary = document.getElementById("salary").value;
 

    if (!isAdd) {
        let id = document.getElementById("id").value;
        console.log("edit employee details");
        console.log(id); 
        console.log( typeof id);
        id = parseInt(id);
        console.log( typeof id);
        employeeDataArray[id]=[empName, derpartment, designation, salary];
        update();
        resetField();
        document.getElementById("saveButton").value = "Add Employee";
        isAdd = true;


    } else {
        if (empName.trim() != '' && derpartment.trim() != '' && designation.trim() != '' && salary.trim() != '') {
            employeeDataArray.push([empName, derpartment, designation, salary]);// use object insted of array of arrays
            console.log(employeeDataArray);
            update();
            resetField();
        } else {
            alert("please enter all field   ")
        }
    }
}
// update the employee list
function update() {
    let tableBody = document.getElementById("tableBody");
    let str = "";
    employeeDataArray.forEach((element, index) => {
        str += `
    <tr>
    <th scope="row">${index + 1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td> 
    <td>${element[2]}</td> 
    <td>${element[3]}</td> 
    <td><button class="btn btn-sm btn-primary m-1" onclick="edit(${index})">Edit</button></t><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
    </tr>`;
    });
    tableBody.innerHTML = str;

}
// delete employee 
function deleted(id) {
    console.log(id);
    employeeDataArray.splice(id, 1);
    update();
    resetField();
    document.getElementById("saveButton").value = "Add Employee";

}
// edit employee data
function edit(id) {
    console.log(id);
    console.log(employeeDataArray[id][0] + ' ' + employeeDataArray[id][1]);
    document.getElementById("name").value = employeeDataArray[id][0];
    document.getElementById("derpartment").value = employeeDataArray[id][1];
    document.getElementById("designation").value = employeeDataArray[id][2];
    document.getElementById("salary").value = employeeDataArray[id][3];
    document.getElementById("id").value = id;
    document.getElementById("saveButton").value = "Update";
    isAdd = false;
}
// input field reset after save and edit the employee
function resetField() {
    document.getElementById("name").value = "";
    document.getElementById("derpartment").value = "";
    document.getElementById("designation").value = "";
    document.getElementById("salary").value = "";
}
