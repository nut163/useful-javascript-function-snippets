// Array Snippets

// Create an array
let arr = [1, 2, 3, 4, 5];

// Access an array item
let firstItem = arr[0];

// Loop over an array
arr.forEach(function(item, index) {
  console.log(item, index);
});

// Add an item to the end of an array
arr.push(6);

// Remove an item from the end of an array
arr.pop();

// Remove an item from the beginning of an array
arr.shift();

// Add an item to the beginning of an array
arr.unshift(0);

// Find the index of an item in the array
let pos = arr.indexOf(1);

// Remove an item by index position
let removedItem = arr.splice(pos, 1);

// Copy an array
let shallowCopy = arr.slice();

// Merge arrays
let arr2 = [6, 7, 8];
let mergedArr = arr.concat(arr2);

// Filter an array based on condition
let filteredArr = arr.filter(num => num > 2);

// Map an array
let mappedArr = arr.map(num => num * 2);

// Reduce an array to a single value
let sum = arr.reduce((total, value) => total + value, 0);