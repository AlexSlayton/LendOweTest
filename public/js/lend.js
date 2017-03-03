$(document).ready(function() {
	// Getting a reference to the input field where user adds a new item.
	var newItemName = $("#name");
	var newItemEmail = $("#email");
	var newItemDescription = $("#message");
	// Our new items will go inside the borrower's table dynamically.
	var itemsContainer = $("#borrower-table");

	// Initial items array.
	var items;

	getItems();

	// This funtion resets the items displayed with new items from the database.
	function initilizeRows() {
		newItemDescription.empty();
		var rowsToAdd =[];
		for (var i = 0; i < items.length; i++) {
			// CreateNewRow function needs to be created.
			rowsToAdd.push(createNewRow(items[i]));
		}
		itemsContainer.prepend(rowsToAdd);
	}

	// This function grabs the items from the database and updates the html.
	function getItems() {
		$.get("/api/items", function(data) {
			console.log("Items")
		})

	}










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