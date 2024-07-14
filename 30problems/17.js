let str=prompt('enter a string')
        let count=0
        arr=['a','e','i','o','u','A','E','I','O','U']
        newstr=str.split('')
        for(let a of arr){
            for(let b of newstr){
                if(a==b){
                    count++
                }
            }
        }
        document.write('Therefore number of vowels in the given string are: ',count)