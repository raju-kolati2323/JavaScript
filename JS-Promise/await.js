let check=new Promise((res,rej)=>{
    setTimeout(()=>{res('Hello ')},3000)
    })
    async function myfun(){
        document.write(await check);
        document.write('World')
    }
    myfun();
