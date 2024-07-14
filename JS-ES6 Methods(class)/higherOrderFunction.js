function greet(callme){
    document.write('Hello World'+'<br>')
     callme();
    // setTimeout(callme,5000)
    
}
function how(){
    document.write('How Are You'+'<br>')
}
setTimeout(greet,5000,how);