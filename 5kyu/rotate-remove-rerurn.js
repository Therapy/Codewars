/*
Give you a 2D array(n * n, n is an odd number more than 1), rotate it, remove elements, return the last surviving number.
Rotate it in a counter clockwise direction.
Remove 1 maximum value and 1 minimum value of each row(remember, only remove 1 maximum value and 1 minimum value, not all of same, remove from left side)
*/

const flip = (array) =>
  array[0].map((col, index) =>
    array.map(row => row[index]));

const rotate = (array) =>
  flip(array).reverse();

const remove = (array, element) =>
  array.splice(array.indexOf(element), 1);

const rotateAndRemove = (array) => {
  const result = rotate(array);

  result.filter((col) => remove(col, Math.min(...col)));
  result.filter((col) => remove(col, Math.max(...col)));

  return result.length > 1 ? rotateAndRemove(result) : Number(result);
}