// DOM Manipulation Snippets

// Selecting an element
let element = document.querySelector('#elementId');

// Selecting multiple elements
let elements = document.querySelectorAll('.className');

// Getting an attribute
let attribute = element.getAttribute('attributeName');

// Setting an attribute
element.setAttribute('attributeName', 'value');

// Adding a class
element.classList.add('className');

// Removing a class
element.classList.remove('className');

// Toggling a class
element.classList.toggle('className');

// Checking if an element has a class
let hasClass = element.classList.contains('className');

// Getting inner HTML
let innerHTML = element.innerHTML;

// Setting inner HTML
element.innerHTML = 'New HTML content';

// Getting inner text
let innerText = element.innerText;

// Setting inner text
element.innerText = 'New text content';

// Adding an event listener
element.addEventListener('click', function(event) {
  console.log('Element was clicked');
});

// Removing an event listener
element.removeEventListener('click', function(event) {
  console.log('Element was clicked');
});