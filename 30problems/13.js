document.write('The prime numbers between 1 to 100 are: ')
         for(n=2;n<=100;n++){
            count=1
            for(i=1;i<=Math.sqrt(n);i++){
               if(n%i==0){
                  count++
               }
               }
               if(count==2){
                    document.write(n+', ')
                }
               }