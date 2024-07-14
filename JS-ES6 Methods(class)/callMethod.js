// methods in objects from here 
let person={
    firstName:'Raju',
    lastName:'Kolati',
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
}
// to here
let person2={
    firstName:'John',
    lastName:'Doe',
}
document.write(person.fullName.call(person2)+'<br>')
document.write(person.fullName.call(person))
