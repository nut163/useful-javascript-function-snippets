// Creating an object
const obj = {};

// Adding properties to an object
obj.name = "John";
obj.age = 30;

// Accessing properties of an object
console.log(obj.name); // "John"
console.log(obj.age);  // 30

// Deleting properties from an object
delete obj.age;

// Checking if a property exists in an object
console.log('name' in obj); // true
console.log('age' in obj);  // false

// Iterating over properties of an object
for (let key in obj) {
  console.log(key, obj[key]);
}

// Cloning an object
const clonedObj = {...obj};

// Merging objects
const obj1 = {name: "John"};
const obj2 = {age: 30};
const mergedObj = {...obj1, ...obj2};