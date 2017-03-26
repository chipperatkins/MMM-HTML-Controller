var NodeHelper = require("node_helper");
var express = require('express');
var app = express();

module.exports = NodeHelper.create({
	start: function () {
		var self = this;
		this.expressApp.get('/' + this.name + '/getModules', function (req, res) {
			self.getModules(res);
		});
	},

	getModules: function(res) {
		this.sendSocketNotification("GET-MODULES", res);
	}
});
