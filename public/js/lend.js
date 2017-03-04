$(document).ready(function() {
	// $("#lend-button").on("click", function() {
	// 	var itemName = $("#name").val().trim();
	// 	var itemEmail = $("#email").val().trim();
	// 	var itemDescription = $("#message").val().trim();

	// 	var newItemRow = $("<tr>");
	// 	newItemRow.append("<td>" + itemName + "</td><td>" + itemEmail + "</td><td>" + itemDescription + "</td>");

	// 	$("#userForm").val("");

	// 	event.preventDefault();
	// });


	// Getting a reference to the input field where user adds a new item.
	var newItemName = $("#name");
	var newItemEmail = $("#email");
	var newItemDescription = $("#message");

	// Our new items will go inside the borrower's table dynamically.
	var itemsContainer = $("#borrower-table");

	$(document).on("submit", "#userForm", insertItem);

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
		var createdAt = items.createdAt;
		var shortText = jQuery.trim(createdAt).substring(0, 10);
		newInputRow.append("<td>" + items.lender.name + "</td><td>" + items.lender.email + "</td><td>" + items.message + "</td><td>" + shortText + "</td>");

		return newInputRow;
	}

	// This function updates an item in our database

	function insertItem(event) {
		event.preventDefault();
		var items = {
			name: newItemName.val().trim(),
			email: newItemEmail.val().trim(),
			message: newItemDescription.val().trim(),
			lenderId: lenderId,
			borrowerId: borrowerId	
		};

		console.log(items);
		// Posting the new Items into the database, calling getItems when done 
		$.post("/api/items", items, function() {
			getItems();
		});

	}

});