let input = document.querySelector('input');
let ul = document.querySelector('ul');
let button = document.getElementById('add');

button.addEventListener('click', function(addItem) {
  //create new li
  let newItem = document.createElement('li');
  newItem.classList.add(".checked");
  //increment the li id for each addition. Need to fix.
  for (let i = 0; i < ul.length; i++) {
    ul[i].setAttribute("id", "item" + i);
  }
  //create span element
  let spanElement = document.createElement('span');
  spanElement.classList.add(".close");
  //add input value
  let newTodo = input.value;
  //append to list
  ul.appendChild(newItem).append(spanElement, newTodo)
});

//remove all from list. Need to fix. Doesn't allow me to restart list
let remove = document.getElementById('remove');

remove.addEventListener('click', function() {
  ul.remove();
});

//strikethrough the item when clicked
ul.addEventListener('click', function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
}, false);

//close an item
let goodbye = document.getElementById("item");
ul.addEventListener('dblclick', function() {
  let i;
  for (i = 0; i < ul.length; i++) {
    if (ul[i] === goodbye) {
      ul.remove(goodbye[i]);
    }
  }
});
