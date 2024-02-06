function zipList(listA, listB) {
  const zipped = [];
  if (listA.length !== listB.length) {
    return 'Error: lists are not of equal length';
  }
  for (let i = 0; i < listA.length; i++) {
    zipped.push(listA[i], listB[i]);
  }
  return zipped;
} // close zipList

const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

console.log(zipList(letters, numbers));
