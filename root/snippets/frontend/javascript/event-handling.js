// Event Handling Snippets

// Click Event
document.querySelector('#elementId').addEventListener('click', function(event) {
  console.log('Element was clicked');
});

// Submit Event
document.querySelector('#formId').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form was submitted');
});

// Mouseover Event
document.querySelector('#elementId').addEventListener('mouseover', function(event) {
  console.log('Mouseover on element');
});

// Keydown Event
window.addEventListener('keydown', function(event) {
  console.log(`Key "${event.key}" was pressed`);
});

// Load Event
window.addEventListener('load', function(event) {
  console.log('Page fully loaded');
});

// Event Delegation
document.querySelector('#parentId').addEventListener('click', function(event) {
  if (event.target.matches('.childClass')) {
    console.log('A child element was clicked');
  }
});