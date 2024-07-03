var myVar; var sec=0; var min=0; var hr=0;var day=0
        function generate(){
        myVar=setInterval(addContent,1000);
        }
        function addContent(){
            
            sec++;
            if(sec==60){
                sec=0
                min++
            }
            if(min==60){
                sec=0
                min=0
                hr++
            }
            if(hr==24){
                sec=0
                min=0
                hr=0
                day++
            }
            document.getElementById("day").innerHTML="Day "+day+": ";
            document.getElementById("myh3").innerHTML=`${hr}`.padStart(2,"0")+"h";
            document.getElementById("myh2").innerHTML=`${min}`.padStart(2,"0")+"m";
            document.getElementById("myh1").innerHTML=`${sec}`.padStart(2,"0")+"s";
        }
        function stop(){
            clearInterval(myVar);
        }