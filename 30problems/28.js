let arr=[1,2,3,4,5,6]
        let newarr=[]
        for(let i=0;i<arr.length;i++){
            let fact=1
            for(j=1;j<=arr[i];j++){
                fact*=j
            }
            newarr+=fact+' '
        }
        document.write(newarr)