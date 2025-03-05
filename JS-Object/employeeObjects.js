// 3.  Given an array of employee objects, each with name and salary properties, print the names of employees
// in ascending order who earn more than a specified amount given by the user.

// const employees = [
//   { name: 'Alice', salary: 50000 },
//   { name: 'Bob', salary: 60000 },
//   { name: 'Charlie', salary: 40000 },
// ];

let earnings=parseInt(prompt('Enter earnings '));
const employee=[
      { name: 'Bob', salary: 50000 },
      { name: 'Alice', salary: 60000 },
      { name: 'Charlie', salary: 40000 },
    ]; 
let emp=[];
employee.forEach((e)=>{
  if(e.salary>earnings)
    emp.push(e.name)
})
    document.write(emp.sort())