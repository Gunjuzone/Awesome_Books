const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.add-btn');
const formBooks = document.querySelector('#form');
const bookSection = document.querySelector('.book-list');

const books = (title, author) => ({
  title,
  author,
});

const booksList = [];

const saveBook = (list) => {
  booksList.push(list);
};

const clearfields = () => {
  titleInput.value = '';
  authorInput.value = '';
};

formBooks.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleValue = titleInput.value;
  const authorValue = authorInput.value;
  const list = books(titleValue, authorValue);
  saveBook(list);
  clearfields();
  booksList.forEach((book) => {
    console.log(book);
    displayBook(book, bookSection);
    // saveBook(list);
  });
});

// console.log(booksList);

// Add Book Dynamically

const createBookElement = (book) => {
  const bookContainer = document.createElement('div');
  bookContainer.innerHTML = `
    <p class="book-title">${book.title}</p>
    <p class="book-author">${book.author}</p>
    <button type="button" data-action="delete" data-book-id=" class="remove-btn">Remove</button>
    `;

  return bookContainer;
};
const displayBook = (book, bookSection) => {
  const newBookElement = createBookElement(book);
  console.log(newBookElement);
  bookSection.appendChild(newBookElement);
};

// const bookContainer = document.createElement('div');
// bookContainer.innerHTML = `
//     <p class="book-title">${book.title}</p>
//     <p class="book-author">${book.author}</p>
//     <button type="button" data-action="delete" class="remove-btn" >Remove</button>
//     `;

// bookList.appendChild(bookContainer);

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const titleValue = titleInput.value;
//   const authorValue = authorInput.value;

//   const bookContainer = document.createElement('div');
//   bookContainer.innerHTML = `
//     <p class="book-title">${titleValue}</p>
//     <p class="book-author">${authorValue}</p>
//     <button type="button" data-action="delete" class="remove-btn" >Remove</button>
//     `;
//   bookList.appendChild(bookContainer);
//   titleInput.value = '';
//   authorInput.value = '';
//   const removeButton = bookContainer.querySelector('.remove-btn');
//   removeButton.addEventListener('click', (e) => {
//     const value = e.target.parentElement;
//     console.log(value);
//     value.remove();
//   });
// });
//
//
