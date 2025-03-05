// 2. Given an array of objects representing books, use the findIndex method to find the index of the book
//  with a specific title given by the user.

// const books = [
//   { title: 'Book A', author: 'Author 1' },
//   { title: 'Book B', author: 'Author 2' },
//   { title: 'Book C', author: 'Author 3' },
// ];
bookTitle=prompt('Enter the title of the book')
const books=[
    {title:'A',author:'Author 1'},
    {title:'B',author:'Author 2'},
    {title:'C',author:'Author 3'},
];
book=books.findIndex((b)=>b.title==bookTitle);
    document.write('Index of the book is: '+book)
