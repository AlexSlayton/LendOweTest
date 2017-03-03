var db = require("../models");

module.exports = function(app) {

	// To get all the new items.
	app.get("/api/LenderBorrower", function(req, res) {	
		db.LenderBorrower.findAll({
		}).then(function(dbLenderBorrower) {
			res.json(dbLenderBorrower);	
		});
	});

	// Get route for retrieving a single item post.
	app.get("/api/LenderBorrower/:id")


	// To post a new item
	app.post("/api/LenderBorrower", function(req, res) {
		db.LenderBorrower.create(req.body).then(function(dbLenderBorrower) {
			res.json(dbLenderBorrower);
		});
	});

};