class drf{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    getFullDetails(){
        return this.firstName+' '+this.lastName+' '+this.age
    }
}
var s1=new drf('Raju','Kolati',21);
var s2=new drf('f','d',34)
document.write(s1.getFullDetails()+'<br>')
document.write(s2.getFullDetails()+'<br>')