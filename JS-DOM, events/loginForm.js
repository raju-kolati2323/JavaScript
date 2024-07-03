document.getElementById('btn').addEventListener('click',(e)=>{
    e.preventDefault();
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var reqdpwd=username.slice(0,3)+'123';
    if(reqdpwd==password){
        document.getElementById('result').innerHTML='Login Success'
        document.getElementById('result').style.color='green'
    }
    else{
        document.getElementById('result').innerHTML='Login failed'
        document.getElementById('result').style.color='red'
    }
})