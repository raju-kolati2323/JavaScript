class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Call the constructor of the parent class
        this.grade = grade;
    }
    getGrade() {
        return `${this.name} is in grade ${this.grade}.`;
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); // Call the constructor of the parent class
        this.subject = subject;
    }
            getSubject() {
        return `${this.name} teaches ${this.subject}.`;
    }
}
const student1 = new Student('Alice', 20, '10th');
const teacher1 = new Teacher('Smith', 45, 'Mathematics');
document.write(student1.greet()+'&nbsp;');
document.write(student1.getGrade()+'<br>');
document.write(teacher1.greet()+'&nbsp;');
document.write(teacher1.getSubject());