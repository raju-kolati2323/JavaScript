// username, amount, age, tenure
//if age>=60   rate of interese=8%
//if age>40 and age<60   rate of interese=7%
//if age<=40    rate of interese=6%
//tenure>4 years => -5% GST else 0%
//calculate the total matured amount for fixed deposite

document.getElementById('btn').addEventListener('click',(e)=>{
    e.preventDefault();
    var uname=document.getElementById('username').value;
    var amount=parseInt(document.getElementById('amount').value);
    var age=parseInt(document.getElementById('age').value);
    var tenure=parseInt(document.getElementById('tenure').value);
    let final=0,gst=0;
    if(age>=60){
            final=amount+amount*tenure*0.08;
             gst=final-final*0.05;
        }
    else if(age>40 && age<60){
            final=amount+amount*tenure*0.07;
            gst=final-final*0.05;
    }
    else if(age<=40){
            final=amount+amount*tenure*0.06;
            gst=final-final*0.05;
    }  
    if(tenure>4){
        document.getElementById('result').innerHTML='Hey '+uname +' your total matured amount is: '+gst;
    }
    else{
        document.getElementById('result').innerHTML='Hey '+uname +' your total matured amount is: '+final;
    }          
});
