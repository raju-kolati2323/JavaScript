let n=prompt(parseInt('enter a number'));
sum="";rem=0;temp=n;
while(n>0){
    rem=n%10;
    n=parseInt(n/10);
    switch(rem){
        case 0: sum='Z'+sum;
        break;
        case 1: sum='O'+sum;
        break;
        case 2: sum='T'+sum;
        break;
        case 3: sum='T'+sum;
        break;
        case 4: sum='F'+sum;
        break;
        case 5: sum='F'+sum;
        break;
        case 6: sum='S'+sum;
        break;
        case 7: sum='S'+sum;
        break;
        case 8: sum='E'+sum;
        break;
        case 9: sum='N'+sum;
        break;
    }
}
document.write(temp +' is coded as'+sum);