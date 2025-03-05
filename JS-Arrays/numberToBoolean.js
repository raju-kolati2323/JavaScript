//if the number is even print true else print false
let arr=[1,2,4,3,5,6,7,8];
document.write('Original array: '+arr+'<br>')
arr.forEach((a,index)=>{
    if (a%2==0){
        arr[index]=true;
    }
    else{
        arr[index]=false
    }
})
document.write('Boolean array: '+arr)
