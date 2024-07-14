let n=parseInt(prompt('enter a number'))
let check=new Promise((res,rej)=>{
        if(n%2==0){
            res('The given number '+'('+n+')'+' is even')
        }
        else{
            rej('('+n+')'+ ' Not an even')
        }
    }
)
check
.then((msg)=>document.write(msg))
.catch((msg)=>document.write(msg))