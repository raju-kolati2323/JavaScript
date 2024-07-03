//map is used to store collections of key value pairs where datatype of keys can be anything.
let brands=new Map();
brands.set(1,'Apple');
brands.set('vivo','iqoo');
brands.set(3,'Samsung');
brands.set('realme','12 pro');
for(let b of brands.keys()){
    document.write(b,',');
}
document.write('<br><br>')
for(let b of brands.values()){
    document.write(b,',')
}
document.write('<br>')
for(let [b,v] of brands.entries()){
    document.write('<br>',b,' : ',v)
}

document.write('<br><br>')
document.write(brands.get('vivo'))
document.write('<br><br>')
document.write(brands.has('vivo'))
document.write('<br><br>')
document.write(brands.delete('vivo'))

document.write('<br>')
for(let [b,v] of brands.entries()){
    document.write('<br>',b,' : ',v)
}

document.write('<br><br>')
document.write(brands.has('vivo'))