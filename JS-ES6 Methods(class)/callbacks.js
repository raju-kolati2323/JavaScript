function greet(callme){
    document.write('Hello World'+'<br>');
    callme();
}
function how(){
    document.write('How are you')
}
greet(how);