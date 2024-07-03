let str="Welcome to the-DRF from the team of-drf to the students"
let n='1'
let n1='12'
document.write((str)+'<br><br>')
let len=str.length
document.write((len)+'<br><br>')
let index=str.indexOf('the')
document.write((index)+'<br><br>')
let lastIndex=str.lastIndexOf('the')
document.write((lastIndex)+'<br><br>')
let search=str.search('the')
document.write((search)+'<br><br>')
let slice=str.slice(1,-5) // first position and last position and allows back tracing
let slice1=str.slice(1,13)
document.write((slice1)+'<br><br>')
document.write((slice)+'<br><br>')
let substring=str.substring(1,14) // first position and last position and don't allow back tracing
document.write((substring)+'<br><br>')
let sub=str.substr(2,10) //first position and length to print 
document.write((sub)+'<br><br>')
let padstart=n.padStart(3,"0")
document.write(padstart,'<br><br>')
let padend=n.padEnd(4,"0")
document.write(padend,'<br><br>')
let padend1=n1.padEnd(4,"0")
document.write(padend1,'<br><br>')
document.write(str.toUpperCase(),'<br><br>')
document.write(str.toLowerCase(),'<br><br>')
document.write(str.replace('students','children'),'<br><br>')
document.write(str.split(' '),'<br><br>') //splits the words or sentence based on space gaps between words
document.write(str.split('-'),'<br><br>') //splits the words or sentence based on - between words