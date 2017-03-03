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
			where: query
		}).then(function(dbItem) {
			res.json(dbItem);	
		});
	});

	// To post a new item.
	app.post("/api/items", function(req, res) {
		db.Item.create(req.body).then(function(dbItem) {
			res.json(dbItem);
		});
	});

};