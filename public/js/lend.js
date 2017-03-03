$(document).ready(function() {
	// Getting a reference to the input field where user adds a new item.
	var newItemName = $("#name");
	var newItemEmail = $("#email");
	var newItemDescription = $("#message");
	// Our new items will go inside the borrower's table dynamically.
	var itemsContainer = $("#borrower-table");

	getItems();

	// This funtion resets the items displayed with new items from the database.
	function initilizeRows(items) {
		newItemDescription.empty();
		newItemName.empty();
		newItemEmail.empty();
		var rowsToAdd =[];
		for (var i = 0; i < items.length; i++) {
			rowsToAdd.push(createNewRow(items[i]));
		}
		itemsContainer.prepend(rowsToAdd);
	}

	// This function grabs the items from the database and updates the html.
	function getItems() {
		$.get("/api/items", function(data) {
			console.log(data);
			initilizeRows(data);
		})
	}

	// This function constructs a todo-item row
	function createNewRow(items) {
		var newInputRow = $("<tr>");
		newInputRow.append("<td>" + items.name + "</td><td>" + items.email + "</td><td>" + items.message + "</td><td>" + items.createdAt + "</td>");

		return newInputRow;
	}




	 // 	var newInputRow = $("<li>");
	 // 	newInputRow.addClass("list-group-item todo-item");
	 // 	var newTodoSpan = $("<span>");
	 // 	newTodoSpan.text(todo.text);
	 // 	newInputRow.append(newTodoSpan);
	 // 	var newTodoInput = $("<input>");
	 // 	newTodoInput.attr("type", "text");
	 // 	newTodoInput.addClass("edit");
	 // 	newTodoInput.css("display", "none");
	 // 	newInputRow.append(newTodoInput);
	 // 	var newDeleteBtn = $("<button>");
	 // 	newDeleteBtn.addClass("delete btn btn-default");
	 // 	newDeleteBtn.text("x");
	 // 	newDeleteBtn.data("id", todo.id);
	 // 	var newCompleteBtn = $("<button>");
	 // 	newCompleteBtn.addClass("complete btn btn-default");
	 // 	newCompleteBtn.text("✓");
	 // 	newInputRow.append(newDeleteBtn);
	 // 	newInputRow.append(newCompleteBtn);
	 // 	newInputRow.data("todo", todo);
	 // 	if (todo.complete) {
	 // 		newTodoSpan.css("text-decoration", "line-through");
	 // 	}
	 // 	return newInputRow;
	 // }









	// var name = $("#name");
	// var email = $("#email");
	// var message = $("#message");
	// var userForm = $("#userForm");
	// var items;

	// $(userForm).on("submit", insertItem);

	// var url = window.location.search;
	// var lenderId;
	// var borrowerId;
	
 //  function getItems() {
 //  	$.get("/api/items", function(data) {
 //  		console.log("Items", data);
 // 		items = data;
 //  	});
 //  }

 //  function insertItem(event) {
	// event.preventDefault();

	// // if(!name.val().trim() || !email.val().trim() || !message.val().trim()) {
	// // 	alert("You did not fill out!");
	// // 	return;
	// // } 

	// var items = {
	// 	name: name.val().trim(),
	// 	email: email.val().trim(),
	// 	message: message.val().trim(),
	// };

	// submitItemsForUser(items);

	// console.log(items);
 //  };

 //  function submitItemsForUser(item) {
	// $.post("/api/items", items, function() {
	// 	getItems();
	// });
 //  }



 //  function getItemsForUser(user_id) {





// };
// When send button is clicked

// Append name, email, item description into the table rows.

// We need a Pending Table with name, email, description, delete button, and returned button.

// We need a Returned Items Table with name, email, description, timestamp.




































});