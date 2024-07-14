let arr=[1,2,3,4,5,6,7,8,9];
let sum=0;
let a=arr.filter((a)=>a%2==0).reduce((a,b)=>a+b)
document.write('Sum of even numbers from given array is: ',a)