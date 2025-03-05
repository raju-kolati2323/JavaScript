let n=prompt(parseInt('enter a number'));
sum=0; count=0;temp=n;rem=0;
while(n>0){
    n=parseInt(n/10)
    count++
}
n=temp;
while(n>0){
    rem=n%10;
    sum=sum+rem**count;
    n=parseInt(n/10);
}
if(sum==temp){
    document.write(temp+' is an Amstrong number');
}
else{
    document.write( temp+' is not an Amstrong number');
}