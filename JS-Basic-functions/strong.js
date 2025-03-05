let n=prompt(parseInt('enter a number'));
sum=0;rem=0;temp=n;
while(n>0){
    fact=1;
    rem=n%10;
    for(i=1;i<=rem;i++){
        fact=fact*i;
    }
    sum=sum+fact;
    n=parseInt(n/10);
}
if(sum==temp){
    document.write(temp+' is a Strong number')
}
else{
    document.write(temp+' is not a Strong number')
}


