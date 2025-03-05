// 5. Write a function that takes an object and a list of keys, and returns a new object that only contains 
// the properties from the list of keys.

// const obj = { a: 1, b: 2, c: 3, d: 4 };
// const keys = ['b', 'c'];


// output : { b: 2, c: 3 }

const obj = { a: 1, b: 2, c: 3, d: 4 };
const keys = ['b', 'c'];
for(let key in obj){
    for(let a of keys){
        if(key==a){
            document.write(key+':'+obj[key]+' ')
        }
    }
}