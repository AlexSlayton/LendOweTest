var db = require("../models");

module.exports = function(app, passport) {

	// To get all the new items.
	app.get("/api/users", function(req, res) {	
		db.User.findAll({
		}).then(function(dbUser) {
			res.json(dbUser);	
		});
	});

	// Get route for retrieving a single item post.
	app.get("/api/users/:id")


	// To post a new item.  This works.
	app.post("/api/users", function(req, res) {
		db.User.create(req.body).then(function(dbUser) {
			res.json(dbUser);
		});
	});

};