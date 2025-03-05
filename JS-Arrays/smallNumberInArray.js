let arr=[10,5,7,12,30,42];
arr1=arr[0];
for(let a of arr){
    if(a<arr1){
        arr1=a;
    }
}
document.write('The smallest number in the array is '+arr1);