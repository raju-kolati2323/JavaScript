//async always gives successful promise
async function hello(){
    return 'Hello World'
}
hello()
    .then((msg)=>{document.write(msg)})