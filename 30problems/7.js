class student{
    constructor(name,marks){
    this.name=name;
    this.marks=marks;
    }
}
let students=[
    new student('Uma',98),
    new student('John',99),
    new student('Alice',96),
];
let max=0;
let maxstd='';
for(let i=0;i<students.length;i++)
{
    if(students[i].marks>max){   
        max=students[i].marks;
        maxstd=students[i];
}
}
document.write(maxstd.name+' '+max)