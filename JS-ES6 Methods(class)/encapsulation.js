class drf{
    constructor(){
        var fs;
        var ds;
    }
    setfullstack(fs){
        this.fs=fs;
    }
    getfullstack(){
        return this.fs;
    }
    setdatascience(ds){
        this.ds=ds;
    }
    getdatascience(){
        return this.ds;
    }
}
var d=new drf();
d.setfullstack('FullStack with MEAN'+'<br>');
d.setdatascience('DataScience'+'<br>')
document.write(d.getfullstack());
document.write(d.getdatascience());