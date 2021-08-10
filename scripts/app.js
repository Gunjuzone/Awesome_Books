const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.add-btn');
const formBooks = document.querySelector('#form');
const bookList = document.querySelector('.book-list');

const books = (title, author) => ({
  title, author
})

const booksList = [];


const saveBook = (list) => {
  booksList.push(list);
}

const clearfields = () => {
  titleInput.value = '';
  authorInput.value = '';
}

formBooks.addEventListener('submit', (e) =>{
  e.preventDefault();
  const titleValue = titleInput.value;
  const authorValue = authorInput.value;
  const list = books(titleValue, authorValue)
  saveBook(list);
  clearfields();
})



console.log (booksList);

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
// function deleteButton(remove, index) {}
// const firstBook = new awesomeBook('The Stranger', 'Albert Camus');
// const secondBook = new awesomeBook('Myth of Sisyphus', 'Albert Camus');

// let bookArray = [firstBook, secondBook];

// const bookCollection = document.querySelector('.book-list');

// const createBookElement = (book) => {};
