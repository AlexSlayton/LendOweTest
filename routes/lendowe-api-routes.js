var db = require("../models");

module.exports = function(app) {

	// To get all the new items.
	app.get("/api/items", function(req, res) {
		var query = {};
		if(req.query.lenderId) {
			query.lenderId = req.query.lenderId;
		}
		db.Item.findAll({
			where: query
		}).then(function(dbItem) {
			res.json(dbItem);	
		});
	});

	// To post a new item.
	app.post("/api/items", function(req, res) {
		db.Item.create({
			name: req.body.name,
			email: req.body.email,
			message: req.body.message
		}).then(function(dbItem) {
			res.json(dbItem);
		});
	});

};