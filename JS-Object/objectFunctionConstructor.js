function person(firstName,lastName,city){
    this.firstName=firstName;
    this.lastName=lastName;
    this.city=city;
}
let p1=new person('Abhi','Roop','Vizag');
let p2=new person('Raju','Kolati','Vizag');
let p3=new person('Sai','Kumar',"Hyderabad");
let persons=[p1,p2,p3];
'<br>';'<br>';'<br>';
for (let p of persons){
    for(let key in p){
        document.write(key+' ='+p[key]+'<br>')
    }
    document.write('<br>')
}
