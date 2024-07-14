let sum=0,count=0,rem=0
        let n=parseInt(prompt('enter a number'))
        let temp=n
        while(n>0){
            rem=n%10
            n=parseInt(n/10)
            count++
        }
        n=temp
        while(n>0){
            rem=n%10
            sum=sum+rem**count
            n=parseInt(n/10)
        }
        if(sum==temp){
            document.write(temp,' is an amstrong number')
        }
        else{
            document.write(temp, ' is not an amstrong number')
        }