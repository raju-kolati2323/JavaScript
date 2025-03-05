let a=parseInt(prompt('enter a number'));
let b=parseInt(prompt('enter a number'));

function add(a,b){
    return (`The sum of ${'a'} and ${'b'} is: `+(a+b));
}
document.write(add(a,b));