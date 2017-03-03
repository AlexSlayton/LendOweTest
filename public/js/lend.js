$(document).ready(function() {

	var name = $("#name");
	var email = $("#email");
	var message = $("#message");
	var userForm = $("#userForm");
	var items;

	$(userForm).on("submit", insertItem);

	var url = window.location.search;
	var lenderId;
	var borrowerId;
	
  function getItems() {
  	$.get("/api/items", function(data) {
  		console.log("Items", data);
 		items = data;
  	});
  }

  function insertItem(event) {
	event.preventDefault();

	// if(!name.val().trim() || !email.val().trim() || !message.val().trim()) {
	// 	alert("You did not fill out!");
	// 	return;
	// } 

	var item = {
		name: name.val().trim(),
		email: email.val().trim(),
		message: message.val().trim(),
	};

	submitItemsForUser(item);

	console.log(item);
  };

  function submitItemsForUser(item) {
	$.post("/api/items", item, function() {
		getItems();
	});
  }



//   function getItemsForUser(user_id) {





// };
// When send button is clicked

// Append name, email, item description into the table rows.

// We need a Pending Table with name, email, description, delete button, and returned button.

// We need a Returned Items Table with name, email, description, timestamp.




































});