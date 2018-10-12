

function addItem ()) {
  let input = document.getElementById('input')[0];
  let newItemText = input.value;
  let newItem = document.createElement('li');
  newItem.innerHTML = newItemText;
  document.getElementById('li').appendChild(newItem);
}

var button = document.getElementById('button');
button.addEventListener('click', addItem());

function checkItem () {

}
