let arr=[10,5,7,12,30,42];
let arr1=["Ironman","Spiderman","Hulk","Captain America","Thanos","Antman"];
let arr2=['Batman','Wonder Women','Superman'];
document.write('Original data: '+arr+'<br>')
document.write('Original data: '+arr1+'<br>')
arr.push(9); //adds an element at the end of an array
document.write('After push: '+arr+'<br>')
arr.pop(); //removes an element at the end of an array
document.write('After pop: '+arr+'<br>')
arr.shift(); //removes an element at the starting position of an array
document.write('After shift: '+arr+'<br>')
arr.unshift(1); //adds an element at the starting position of an array
document.write('After unshift: '+arr+'<br>')
arr1.splice(1,1,'Spiderman','Thor')//add elements at any position of an array
document.write('After splice add: '+arr1+'<br>')
arr1.splice(4,1) //removes elements at any position of an array
document.write('After splice remove: '+arr1+'<br>')
delete arr1[4] //removes the value at the position but not the element, now it will return a null value
document.write('After delete: '+arr1+'<br>')
var arr0=arr1.slice(0,2)//to create sub array from an array
document.write('After slice: '+arr0+'<br>')
var total=arr1.concat(arr2)//to add 2 arrays
document.write('After concat: '+total+'<br>')
sort=arr.sort(function(a,b){return a-b});// for ascending sort
document.write('After ascending sort: '+sort+'<br>')
sort1=arr.sort(function(a,b){return b-a});// for descending sort
document.write('After descending sort: '+sort1+'<br>')
arr3=arr1.reverse()//to reverse the elements in an array
document.write('After reversing: '+arr3+'<br>')
arr4=arr.forEach((a)=>{document.write('After forEach '+a*2+'<br>')})
arr5=arr.map((a)=>a*2);
document.write('After map '+arr5+'<br>')
arr6=arr.filter((a)=>a%2==0)
document.write('After filter '+arr6+'<br>')

let array=[10,5,7,12,30,42];
arr7=array.findIndex((a)=>a>20)// to get the index value of an element if the condition is satisfied
document.write('After findIndex '+arr7+'<br>')
arr8=array.reduce((a,b)=>a+b); //adds all the elements
document.write('After reduce '+arr8+'<br>')






