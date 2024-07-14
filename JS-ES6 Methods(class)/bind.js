let person={
    firstName:'John',
    lastName:'Doe',
    fullName:function(city,country){
        return this.firstName+" "+this.lastName+' from '+city+' in '+country;
    }
}
let person2={
    firstName:'Raju',
    lastName:'Kolati'
}
let getFullName=person.fullName.bind(person,'New York','USA');
document.write(getFullName())