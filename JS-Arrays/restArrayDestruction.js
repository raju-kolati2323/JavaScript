function addition(...a){   // here a represents the type of data which is array datatype
    let sum=0
    for (let i of a){
        sum=sum+i;
    }
    document.write('Addition of given numbers is: ',sum)
}
addition(10,20,30,40)