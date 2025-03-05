let n=prompt(parseInt('enter a number'));
sum=""; temp=n;rem=0;
while(n>0){
    rem=n%10;
    sum+=rem;
    n=parseInt(n/10);
}
document.write(`Reverse of ${temp} is `+sum);
