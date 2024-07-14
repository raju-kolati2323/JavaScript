let n1=0,n2=1,n=0
        let N=parseInt(prompt('enter the value of N'))
        document.write(N,' digits in fibonacci series are ',n1,', ',n2,', ')
        for(i=0;i<N-2;i++){
            
            n=n1+n2
            document.write(n,', ')
            n1=n2
            n2=n
        }