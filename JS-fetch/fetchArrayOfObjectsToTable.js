const data=fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>res.json())
.then((data)=>document.querySelector('.table-container').innerHTML=generateTable(data))
let table=`<table>`
function generateTable(data){
    table+=`<tr><th>id</th><th>Title</th><th>Body</th></tr>`
    data.forEach((item)=>{
        table+=`<tr><td>${item.id}.</td><td>${item.title}</td><td>${item.body}</td></tr>`
    })
    table+=`</table>`
    return table;
}
