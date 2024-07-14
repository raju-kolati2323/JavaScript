let str=prompt('enter a string')
        if(str==str.split('').reverse().join('')){
        document.write('The string is a palindrome')
    }
    else{
        document.write('Not a palindrome')
    }