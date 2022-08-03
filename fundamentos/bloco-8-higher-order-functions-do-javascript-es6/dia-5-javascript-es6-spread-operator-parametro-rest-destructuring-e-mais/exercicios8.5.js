// questão 1

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangles) 
  console.log(rectangle[0] * rectangle[1]);
}); rectangles

// questão 2

const sum = (...num) => num.reduce((a,b) => a + b);

console.log(sum(1,2,34,5,6,6,7,8));

// questão 3

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};


const personLikes = ({ name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex)); 
console.log(personLikes(gunnar)); 

// questão 4

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (people) => people.filter(
  ({ bornIn, nationality }) =>
    bornIn > 1900 
    && bornIn <= 2000 
    && nationality === 'Australian',
);

console.log(filterPeople(people));

// questão 5

const myList = [1, 2, 3];

const swap = ([first, second, third]) => [third, second, first];
console.log(swap(myList));

// questão 6

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ((...[ name, brand, year ]) => ({ name, brand, year }));
console.log(toObject(palio, shelbyCobra, chiron));

// questão 7

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = (({ name, length, measurementUnit }) => ( `${name} is ${length} ${measurementUnit} long` ));
console.log(shipLength(ships[0]));
console.log(shipLength(ships[1]));
console.log(shipLength(ships[2]));

// questão 8

const greet = (name, msg = 'Hi') => `${msg}, ${name}`;

console.log(greet('John'));
console.log(greet('John', 'Good morning')) ;;
console.log(greet('Isabela', 'Oi'));

// questão 9


const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const { spring, summer, autumn, winter } = yearSeasons;
const months = [...spring, ...summer, ...autumn, ...winter];
console.log(months);