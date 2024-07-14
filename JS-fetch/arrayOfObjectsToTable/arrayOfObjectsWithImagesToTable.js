const data=[
    {
    id:1,
    quote:"Life isn’t about getting and having, it’s about giving and being.",
    author:"Kevin Kruse",
    imgurl:"https://history.princeton.edu/sites/g/files/toruqf5351/files/styles/freeform_750w/public/Barros_190918_123.jpg?itok=ZA_-zsv4"
    },
    {
    id:2,
    quote:"Whatever the mind of man can conceive and believe, it can achieve.",
    author:"Napoleon Hill",
     imgurl:"https://www.toolshero.com/wp-content/uploads/2016/10/napoleon-hill-biography-toolshero.jpg"
   
    },
   
    {
    id:3,
    quote:"Strive not to be a success, but rather to be of value.",
    author:"Albert Einstein",
     imgurl:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg"
   
    },
    {
    id:4,
    quote:"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author:"Robert Frost",
     imgurl:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-82587359.jpg"
   
    },
    {
    id:5,
    quote:"I attribute my success to this: I never gave or took any excuse.",
    author:"Florence Nightingale",
     imgurl:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Florence_Nightingale_%28H_Hering_NPG_x82368%29.jpg"
   
    },
    {
    id:6,
    quote:"You miss 100% of the shots you don’t take.",
    author:"Wayne Gretzky",
    imgurl:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-51390778.jpg"
   
    },
    {
    id:7,
    quote:"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author:"Michael Jordan",
    imgurl:"https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg"
   
    },
    {
    id:8,
    quote:"The most difficult thing is the decision to act, the rest is merely tenacity.","author":"Amelia Earhart"},
    {
    id:9,
    quote:"We become what we think about.",
    author:"Earl Nightingale",
     imgurl:"https://www.newtraderu.com/wp-content/uploads/Holly_portrait_of_Earl_Nightingale_cinematic_9a4b5f8f-d375-4e4e-8688-87f051fa9f12.jpg"
   
    },
    {
    id:10,
    quote:"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
    author:"Mark Twain",
     imgurl:"https://media.npr.org/assets/artslife/arts/2010/11/mark-twain/mark-twain-6fa45e42400eea8cac3953cb267d66a33825a370-s1100-c50.jpg"
   
    },
    {
    id:11,
    quote:"Life is 10% what happens to me and 90% of how I react to it.",
    author:"Charles Swindoll",
     imgurl:"https://media.npr.org/assets/artslife/arts/2010/11/mark-twain/mark-twain-6fa45e42400eea8cac3953cb267d66a33825a370-s1100-c50.jpg"
   
    },
    {
    id:12,
    quote:"The most common way people give up their power is by thinking they don’t have any.",
    author:"Alice Walker",
     imgurl:"https://www.thoughtco.com/thmb/P0DPJDBAGxGpSY8IBZ0JfiNpEQk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Alice-Walker-112931058x1-56aa24d75f9b58b7d000fc00.jpg"
   
    },
    {
    id:13,
    quote:"The mind is everything. What you think you become.",
    author:"Buddha",
     imgurl:"https://images.theconversation.com/files/460884/original/file-20220502-24-bg7hxv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
   
    },
    {
    id:14,
    quote:"The best time to plant a tree was 20 years ago. The second best time is now.",
    author:"Chinese Proverb",
     imgurl:"https://images.theconversation.com/files/460884/original/file-20220502-24-bg7hxv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
   
    },
    {
    id:15,
    quote:"An unexamined life is not worth living.",
    author:"Socrates",
     imgurl:"https://images.saymedia-content.com/.image/t_share/MTc5NTI0NTM1MTE1OTgxOTAz/the-life-and-times-of-the-ancient-greek-philosopher-socrates.jpg"
   
    }
]
let table=`<table>`
function generateTable(data){
    table+=`<tr><th>id</th><th>Quote</th><th>Author</th><th>Image</th></tr>`
    data.forEach((item)=>{
        table+=`<tr><td>${item.id}.</td><td>${item.quote}</td><td>${item.author}</td><td><img src="${item.imgurl}"</td></tr>`
    })
    table+=`</table>`
    return table;
}
document.querySelector('.table-container').innerHTML=generateTable(data);