let rows=4,pattern='',value=1
        for(let i=1;i<=rows;i++){
            for(let j=1;j<=4;j++){
                pattern+=value+' '
                value++
            }
            pattern+='<br>'
        }
        document.write(pattern)