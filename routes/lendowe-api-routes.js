var db = require("../models");

module.exports = function(app) {

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

	app.post("/api/items", function(req, res) {
		
	})


};