let otp=''
for(i=0;i<5;i++){
    otp+=Math.floor(Math.random()*10)
}
document.write('OTP is '+otp)