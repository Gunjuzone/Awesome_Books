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



document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const nPages = document.querySelector('#nPages').value;

  if (title === '' || author === '' || nPages === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    const book = new Book(title, author, nPages);
    UI.addBookToList(book);
    Store.addBook(book);
    UI.showAlert('Book Added', 'success');
    UI.clearFields();
  }
});
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});