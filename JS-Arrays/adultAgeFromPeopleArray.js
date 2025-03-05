let peopleAge=[21,5,30,42,27,19,13,12];
let adult=[];
for(let a of peopleAge){
    if(a>18){
        adult.push(a);
    }
}
document.write(adult)