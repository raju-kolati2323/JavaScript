//onload, onresize, ononline, onoffline

function hello(){
    alert('Hello');
}
function myfun(){
    alert('Your screen is resized')
}
function online(){
    document.getElementById('myh1').innerHTML='Hello World'
}
function offline(){
    document.getElementById('myh1').innerHTML=' ERROR -------You are offline'
}