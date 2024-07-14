function fun(){
    let a=10;
    function subfun(){
        document.write(a);
    }
    return subfun;
}
let res=fun();
res()