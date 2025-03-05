// Given an array of objects representing students, use the map method to create a new array of objects 
// where each object has an additional property isAdult that is true if the student's age is 18 or above, 
// and false otherwise.

// students = [
//   { name: 'John', age: 17 },
//   { name: 'Jane', age: 19 },
//   { name: 'Jack', age: 18 },
// ];

// output : 
// [
//   { name: "Alice", age: 17, isAdult: false },
//   { name: "Bob", age: 18, isAdult: true },
//   { name: "Charlie", age: 19, isAdult: true }
// ]

function student(Sname,age){
    this.Sname=Sname;
    this.age=age;
}
let s1=new student('Alice',17);
let s2=new student('Bob',19);
let s3=new student('Charlie',18);
let students=[s1,s2,s3];
    let std=students.map((s)=>{
        return {
            Sname:s.Sname,
            age:s.age,
            isAdult:s.age>=18
        }   
        })
        for (let s of std){
            for (let key in s){
                document.write(key+'='+s[key],'<br>')
            }
            document.write('<br>')
        }