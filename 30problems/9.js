let n=parseInt(prompt('enter a number'));
        let temp=n;
        let sum='0';
        let rem;
        while(n>0){
            rem=n%10
            sum=sum+rem
            n=parseInt(n/10)
        }
        if(temp==sum){
            document.write('Its a palindrome')
        }
        else{
            document.write('Not a palindrome')
        }