document.getElementById("todoAdd").addEventListener("click", function(event){event.preventDefault()});
let todoText;
let todoList = [];
let todoItem = 0;

function addTodo() {
	todoText = document.getElementById("todoText").value.trim();
	if (todoText == ""){
		alert("Please Enter a Value")
	} else if (todoList.indexOf(todoText) != -1){
		alert(`"${todoText}" Already Exists in the List`)
	} else {
		todoList.push(todoText);
		document.getElementById("todoUl").innerHTML += `<li>${todoList[todoItem]}<button class="delete-botton" id="delete-${todoItem}" onclick="deleteTodo(this.id)"><i class="fa fa-trash" aria-hidden="true"></i></button><button class="edit-botton" id="edit-${todoItem}" onclick="editTodo(this.id)"><i class="fa fa-pencil" aria-hidden="true"></i></button><button class="done-botton" id="done-${todoItem}" onclick="doneTodo(this.id)"><i class="fa fa-check" aria-hidden="true"></i></button></li>`;
		document.getElementById("todoText").value = "";
		todoItem += 1;
	}
}

function deleteTodo(clickedId){
	todoList.splice(todoList.indexOf(document.getElementById(`${clickedId}`).parentElement.innerHTML.slice(0,document.getElementById(`${clickedId}`).parentElement.innerHTML.indexOf("<"))), 1);
	document.getElementById(`${clickedId}`).parentElement.remove();
	todoItem -= 1;
}

function doneTodo(clickedId){
	if (document.getElementById(`${clickedId}`).parentElement.style.textDecoration == "line-through"){
		document.getElementById(`${clickedId}`).parentElement.style.textDecoration = "none";
		document.getElementById(`${clickedId}`).innerHTML = `<i class="fa fa-check" aria-hidden="true">`;
	} else {
		document.getElementById(`${clickedId}`).parentElement.style.textDecoration = "line-through";
		document.getElementById(`${clickedId}`).innerHTML = `<i class="fa fa-repeat" aria-hidden="true"></i>`;
	}
}

function editTodo(clickedId){
	if (document.getElementById(`${clickedId}`).parentElement.innerHTML.indexOf("input") == -1) {
		let numberOfClicked = clickedId.slice(5);
		window.replaceItemInTodoList = todoList.indexOf(`${document.getElementById(`${clickedId}`).parentElement.innerHTML.slice(0, document.getElementById(`${clickedId}`).parentElement.innerHTML.indexOf("<"))}`);
		document.getElementById(`${clickedId}`).parentElement.innerHTML = `<form><input id="editInput-${numberOfClicked}" type="text" value="${document.getElementById(`${clickedId}`).parentElement.innerHTML.slice(0, document.getElementById(`${clickedId}`).parentElement.innerHTML.indexOf("<"))}"></input><input style="display:none" type="submit" id="editSubmit-${numberOfClicked}" onclick="editTodoSubmit(this.id)"></input></form>${document.getElementById(`${clickedId}`).parentElement.innerHTML.slice(document.getElementById(`${clickedId}`).parentElement.innerHTML.indexOf("<"))}`
		document.getElementById(`edit-${numberOfClicked}`).innerHTML = `<i class="fa fa-floppy-o" aria-hidden="true"></i>`;
		document.getElementById(`edit-${numberOfClicked}`).addEventListener("click", function(event){event.preventDefault()});
	} else {
		let numberOfClicked = clickedId.slice(5);
		document.getElementById(`${clickedId}`).parentElement.innerHTML = `${document.getElementById(`editInput-${numberOfClicked}`).value}<button class="delete-botton" id="delete-${numberOfClicked}" onclick="deleteTodo(this.id)"><i class="fa fa-trash" aria-hidden="true"></i></button><button class="edit-botton" id="edit-${numberOfClicked}" onclick="editTodo(this.id)"><i class="fa fa-pencil" aria-hidden="true"></i></button><button class="done-botton" id="done-${numberOfClicked}" onclick="doneTodo(this.id)"><i class="fa fa-check" aria-hidden="true"></i></button>`;
		todoList.splice(replaceItemInTodoList, 1, `${document.getElementById(`delete-${numberOfClicked}`).parentElement.innerHTML.slice(0, document.getElementById(`delete-${numberOfClicked}`).parentElement.innerHTML.indexOf("<"))}`)
	}
}
function editTodoSubmit(clickedId){
	let numberOfClicked = clickedId.slice(11);
	document.getElementById(`${clickedId}`).parentElement.parentElement.innerHTML = `${document.getElementById(`editInput-${numberOfClicked}`).value}<button class="delete-botton" id="delete-${numberOfClicked}" onclick="deleteTodo(this.id)"><i class="fa fa-trash" aria-hidden="true"></i></button><button class="edit-botton" id="edit-${numberOfClicked}" onclick="editTodo(this.id)"><i class="fa fa-pencil" aria-hidden="true"></i></button><button class="done-botton" id="done-${numberOfClicked}" onclick="doneTodo(this.id)"><i class="fa fa-check" aria-hidden="true"></i></button>`;
	todoList.splice(replaceItemInTodoList, 1, `${document.getElementById(`delete-${numberOfClicked}`).parentElement.innerHTML.slice(0, document.getElementById(`delete-${numberOfClicked}`).parentElement.innerHTML.indexOf("<"))}`)
	document.getElementById("edit-0").innerHTML = `<i class="fa fa-pencil" aria-hidden="true"></i>`;
}