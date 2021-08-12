/* eslint-disable max-classes-per-file */
class Book {
  constructor(author, title, nPages, read) {
    this.author = author;
    this.title = title;
    this.nPages = nPages;
    this.read = read;
    this.id = title.slice(0, 3).toUpperCase() + nPages;
  }
}

function change(e) {
  const elem = document.getElementById(e.target.id);
  if (elem.innerHTML === 'Read') elem.innerHTML = 'Unread';
  else elem.innerHTML = 'Read';
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(nPages) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.nPages === nPages) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

