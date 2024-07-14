let gcd;
        let n1 = prompt('Enter the first positive integer: ');
        let n2 = prompt('Enter the second positive integer: ')
        if(n1==0&&n2==0){
            document.write(`GCD of ${n1} and ${n2} is 1`)
        }
        else if(n1==0){
            document.write(`GCD of ${n1} and ${n2} is ${n2}`)
        }
        else if(n2==0){
            document.write(`GCD of ${n1} and ${n2} is ${n1}`)
        }
        else{
        for (let i = 1; i <= n1 && i <= n2; i++) {
            if (n1%i===0 && n2%i===0) {
                gcd=i;
            }
        }
    }
        document.write(`GCD of ${n1} and ${n2} is ${gcd}`);