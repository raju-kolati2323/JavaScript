function mobile(company,model,cost){
    this.company=company;
    this.model=model;
    this.cost=cost;
}
let m1=new mobile('vivo','iqoo7',30000);
let m2=new mobile('oneplus','9R',40000);
let m3=new mobile('realme','12pro',24000);
let mobiles=[m1,m2,m3];
newmob=mobiles.filter((m)=>m.cost>25000);
for(let m of newmob){
for(let key in m){
    document.write(key+'='+m[key]+'<br>')
}
document.write('<br>')
}