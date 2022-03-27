function solve(arrInput){
let employeeList={}
for (let employee  of arrInput) {
    employeeList.name=employee;
    employeeList.number=employee.length;
    console.log(`Name: ${employeeList.name} -- Personal Number: ${employeeList.number}`);
}
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])
    