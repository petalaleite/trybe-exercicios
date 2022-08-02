const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// questão 1

const formateBookNames = () => {
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}

console.log(formateBookNames());

// questão 2 

const nameAndAge = () => {
  const obj = books.map((book) => ( { author: book.author.name, age: book.releaseYear - book.author.birthYear, }))
  return obj.sort((a, b) => a.age - b.age);
}

console.log(nameAndAge());

// questão 3

const fantasyOrScienceFiction = () => {
  return books.filter((book) => book.genre == 'Ficção Científica' || book.genre === 'Fantasia');
}
console.log(fantasyOrScienceFiction());

// questão 4

const oldBooksOrdered = () => {
  const booksYear = books.filter((book) => 2022 - book.releaseYear > 60);
  return booksYear.sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(oldBooksOrdered());

// questão 5

const fantasyOrScienceFictionAuthors = () => {
  const filtered = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia'); // poderia usar o includes aqui
  return filtered.map((book) => book.author.name).sort();
};

console.log(fantasyOrScienceFictionAuthors());

// questão 6

const oldBooks = () => {
  const filtered = books.filter((book) => 2022 - book.releaseYear > 60);
  return filtered.map((book) => book.name);
}

console.log(oldBooks());

// questão 7

const authorWith3DotsOnName = () => {
  
}