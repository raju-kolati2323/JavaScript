arr=[1,2,3,4,5,6,7,8,9,10];
arrnew=arr.filter((a)=>a%2==0).reduce((a,b)=>a+b);
document.write('The sum of even numbers in an arrray are: '+arrnew);