let arr=[],n
        while(n!=0){
            n=parseInt(prompt('Enter a number or enter 0 to terminate and print the result')) //enter 0 to stop input values
            arr.push(n)
        }
        let len=arr.length
        let length=len-1
        let newarr=arr.reduce((a,b)=>a+b);

        document.write('You have entered '+length+' numbers, and the sum of given '+length+' numbers is: '+ newarr)
        