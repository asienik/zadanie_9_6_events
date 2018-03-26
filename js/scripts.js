var list = document.getElementById('my-list');
var add = document.getElementById('addElem');
var items = document.getElementsByTagName('li');

add.addEventListener('click', function() {
var element = document.createElement('li');	
element.innerText = "item" + items.length;
list.appendChild(element);
});   

										




















