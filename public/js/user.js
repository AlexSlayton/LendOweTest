$(document).ready(function() {
	// Getting a reference to the input field where user adds a new item.
	var newPerson = $("#username");
	var newPersonEmail = $("#password");
	

	$(document).on("submit", "#singup-form", insertPerson);

	function insertPerson(event) {
		event.preventDefault();
		var users = {
			email: newPerson.val().trim(),
			password: newPersonEmail.val().trim(),
		};

		console.log(users);
		// Posting the new Items into the database, calling getItems when done 
		$.post("/api/users", users, function() {
			window.location.href = "/login";
			
		});

	}


});