let arr=[2,5,1,8,4,9];
        let l=arr.length
        let small=arr[0];
        let big=arr[0];
        for(i=0;i<l;i++){
            if(arr[i]<small){
                small=arr[i]
            }
            if(arr[i]>big){
                big=arr[i]
            }
        }
        document.write('The difference between biggest and smallest number of an array is: ',big-small+'<br><br> <hr> <br><br>')


    
        let arr1=[2,5,1,8,9,4];
        let b=arr1.length
        a=arr.sort(function(a,b){return(a-b)})
        document.write(a[b-1]-1)