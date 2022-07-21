arr = [1, 3, 2, 4];

const myRemove = (arr, item) => {
let itemToRemove = 0;
  for(let i of arr) {
    if(arr[i] === item)
      itemToRemove = i;
  }

  arr.splice(itemToRemove, 1);
  return arr;
}

console.log(myRemove(arr, 3));


module.exports = myRemove;