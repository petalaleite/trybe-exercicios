// questão 1

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangles) // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
}); rectangles

// questão 2

const sum = (...num) => num.reduce((a,b) => a + b);

console.log(sum(1,2,34,5,6,6,7,8));