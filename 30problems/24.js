let rows=4, pattern='',value=20
        for(let i=1;i<=rows;i++){
            for(let j=5-i;j>=1;j--){
                pattern+=value+' '
                value-=2

            }
            pattern+='<br>'
        }
        document.write(pattern)