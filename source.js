/* eslint-disable prefer-const */

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let bookCards = document.querySelector('#book-cards');

function createBookCard(book) {
  const card = document.createElement('div');
  card.classList.add('book-card');

  const title = document.createElement('h2');
  title.textContent = book.title;

  const author = document.createElement('p');
  author.textContent = `Author: ${book.author}`;

  const pages = document.createElement('p');
  pages.textContent = `Pages: ${book.pages}`;

  const read = document.createElement('p');
  read.textContent = `${book.read ? 'Read' : 'Not Read'}`;

  const remove = document.createElement('button');
  remove.textContent = 'Delete';
  remove.addEventListener('click', () => {
    const index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    bookCards.removeChild(card);
  });

  const readStatus = document.createElement('button');
  readStatus.textContent = 'Toggle';
  readStatus.addEventListener('click', () => {
    // eslint-disable-next-line no-param-reassign
    book.read = !book.read; // toggle the read property
    read.textContent = `${book.read ? 'Read' : 'Not Read'}`; // update the text content
  });

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  card.appendChild(remove);
  card.appendChild(readStatus);

  return card;
}

function render() {
  bookCards.innerHTML = '';
  myLibrary.forEach((book) => {
    const card = createBookCard(book);
    bookCards.appendChild(card);
  });
}

function addBookToLibrary(event) {
  event.preventDefault();
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  let newBookForm = document.querySelector('#new-book-form');
  newBookForm.style.display = 'none';
  render();
}

const addBookBtn = document.querySelector('#submit');
addBookBtn.addEventListener('click', addBookToLibrary);

const newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.addEventListener('click', () => {
  let newBookForm = document.querySelector('#new-book-form');
  newBookForm.style.display = 'block';
});
