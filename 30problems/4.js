let arr=[10,20,30,40,30,20,50];
let str=new Set(arr);
let arr1=[...str]
let a=arr.length
let s=arr1.length
document.write('Number of duplicate elements of an array are: ',a-s)