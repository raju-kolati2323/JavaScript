let age=parseInt(prompt('enter your age'))
let check=new Promise((resolve,reject)=>{
    if(age>=21){
        resolve('Welcome to club')
    }
    else{
        reject('Your are not allowed')
    }
})
check
    .then((msg)=>document.write(msg,'<br><br>'))
    .catch((msg)=>document.write(msg,'<br><br>'))
    .finally(()=>document.write("Thankyou for visiting, Please visit again")) 
    //prints - even the condition is not satisfied