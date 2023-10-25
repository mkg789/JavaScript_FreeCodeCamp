// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList,bookName) {
  const book =[...bookList];
  book.push(bookName);
  return book;
  
  
  // Change code above this line
}


// Change code below this line
function remove(bookList, bookName) {
  const book =[...bookList];
  const book_index = book.indexOf(bookName);
  if (book_index >= 0) {

    book.splice(book_index, 1);
    return book;

    // Change code above this line
    }
}