class drf{
    fullstack(){
        document.write('From parent class'+'<br>')
    }
}
class techjobs extends drf{
    fullstack(){
        document.write('From child class'+'<br>')
    }
}
var obj=[new drf(), new techjobs()];
obj.forEach((a)=>{
    a.fullstack();
})