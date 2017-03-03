var db = require("../models");

module.exports = function(app) {

	// To get all the new items.
	app.get("/api/items", function(req, res) {
		var query = {};
		if(req.query.lenderId) {
			query.lenderId = req.query.lenderId;
		} else if (req.query.borrowerId) {
			query.borrowerId = req.query.borrowerId;
		}
		db.Item.findAll({
			where: query,
			include: [{model: db.LenderBorrower, as: "lender"}, {model: db.LenderBorrower, as: "borrower"}]
		}).then(function(dbItem) {
			res.json(dbItem);	
		});
	});

	// Get route for retrieving a single item post.
	app.get("/api/items/:id")


	// To post a new item.  This works.
	app.post("/api/items", function(req, res) {
		db.Item.create(req.body).then(function(dbItem) {
			res.json(dbItem);
		});
	});

};