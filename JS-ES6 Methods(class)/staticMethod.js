class drf{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    getFullDetails(){
        return this.firstName+' '+this.lastName+' '+this.age
    }
    static welcome(){
        return 'Welcome to DRF'
    }
}
document.write(drf.welcome()+'<br>');
var s1=new drf('Raju','Kolati',21);
document.write(s1.getFullDetails()+'<br>')