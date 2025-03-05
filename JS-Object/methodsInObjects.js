let person={
    firstName:'Raju',
    lastName:'Kolati',
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
}
document.write(person.fullName())