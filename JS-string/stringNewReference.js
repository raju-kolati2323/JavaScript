let str1=new String("hello") //object
let str2="hello"; //string
let str3="hello"; //string
document.write((str2==str3)+"<br>")
document.write((str2===str3)+"<br>")
document.write((str1==str3)+"<br>")
document.write((str1===str3)+"<br>")
document.write(str1.toString()===str2) //converting object to string