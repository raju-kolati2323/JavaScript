var n=prompt(parseInt("enter a number"));
let count=0;
if(n<=1){
    document.write(n+' is not prime');
}
else{
for (i=1;i<=n;i++){
    if (n%i==0){
    count++;
    }
}
if(count>2){
    document.write(n+' is not prime');
}
else{
    document.write(n+' is prime');
}
}