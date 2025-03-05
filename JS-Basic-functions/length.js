let n=prompt(parseInt('enter a number'));
count=0;temp=n;
while(n>0){
    n=parseInt(n/10);
    count++;
}
document.write(`The length of ${temp} is `+count);