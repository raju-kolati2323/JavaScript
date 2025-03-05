let n=prompt(parseInt('enter a number'));
temp=n; sum="";rem=0;
while(n>0){
    rem=n%10;
    sum=sum+rem;
    n=parseInt(n/10);
}
if(temp==sum){
    document.write(temp+ ' is a Palendrome')
}
else{
    document.write(temp+ ' is not a Palendrome')}