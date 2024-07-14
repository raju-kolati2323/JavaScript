let result=new Promise((res,rej)=>{
    setTimeout(()=>{rej("Promise is rejected")},3000)
})
result
    .catch((msg)=>document.write(msg,'<br><br>'))
document.write('End of code')
//this is not a proper way to declare reject timer, so we have to use async and await 