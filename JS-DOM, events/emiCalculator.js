var dropdown,amount,p,t,r,emi,myfun;
        function myfun(){
                var r=parseInt(document.getElementById("dropdown").value);
            }
        document.getElementById("btn").addEventListener("click",(e)=>{
            e.preventDefault();
            var username=document.getElementById("username").value;
            var password=document.getElementById("password").value;
            var reqdpwd=username.substring(0,3)+"@123";
            p=parseInt(document.getElementById("principal").value);
            t=parseInt(document.getElementById("tenure").value);
            var r=parseInt(document.getElementById("dropdown").value);

            if(reqdpwd==password){
               if(p<500000){
               SI=(p*t*r)/100
               emi=(p+SI)
               emi=emi/(12*t)
              
               }
               else{
               SI=(p*t*r)/100
               emi=(p+SI+5000)
               emi=emi/(12*t)
               }
            }
            else{
                alert('Please enter correct password')
            }
            document.getElementById("result").innerHTML='EMI per month is '+emi+'Rs for '+t+' years';
        });