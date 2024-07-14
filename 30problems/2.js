let arr=[10,20,30,40,50];
        let l=arr.length;
        sum=arr.reduce((a,b)=>a+b)
        let average=sum/l
        document.write('The average of elements in an array of numbers is: ',average)