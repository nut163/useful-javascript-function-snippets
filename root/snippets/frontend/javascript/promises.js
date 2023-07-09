// Creating a new Promise
const promise = new Promise((resolve, reject) => {
  let condition = true;
  if(condition) {
    resolve('Promise is resolved successfully.');
  } else {
    reject('Promise is rejected');
  }
});

// Consuming a Promise
promise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.error(message);
  });

// Promise.all
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// Promise.race
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise4, promise5]).then((value) => {
  console.log(value);
});