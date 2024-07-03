function hello(){
    fetch("https://api.chucknorris.io/jokes/random")
    .then((res)=>res.json())
    .then((data)=>document.getElementById("myp").innerHTML=data.value)
}