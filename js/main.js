let input = document.querySelector('input');
let ul = document.querySelector('ul');
let button = document.querySelector('button');

button.addEventListener('click', function(addItem) {
  //create new li
  let newItem = document.createElement('li');
  //create span element
  let spanElement = document.createElement('span');
  //add input value
  let newTodo = input.value;
  //append to list
  ul.appendChild(newItem).append(spanElement, newTodo);
});

newItem.addEventListener('click', function(deleteItem) {
  let postedItem = document.getElementsByTagName('li');
  ul.removeChild(postedItem);
});
