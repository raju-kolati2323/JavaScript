let sum=0,rem=0;
        n=parseInt(prompt('enter a number'));
        let temp=n;
        while(n>0){
            let fact=1;
            rem=n%10
            for(i=1;i<=rem;i++){
                fact=fact*i
            }
            sum=sum+fact
            n=parseInt(n/10)
        }
        if(sum==temp){
            document.write('Given number is strong number')
        }
        else{
            document.write('Not a strong number')
        }