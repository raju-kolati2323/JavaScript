var n=prompt(parseInt('enter a number'));
let fact=1;
for(i=1;i<=n;i++){
    fact=fact*i;
}
document.write(`The factorial of ${n} is `+fact);