var NodeHelper = require("node_helper");
var express = require('express');
var app = express();
var self;

module.exports = NodeHelper.create({
	start: function () {
		self = this;
		this.expressApp.get('/' + this.name + '/getModules', function (req, res) {
			res.send('Welcome');
			self.getModules();
		});
	},

	getModules: function() {
		this.sendSocketNotification("GET-MODULES");
	},
	
	socketNotificationReceived: function(notification, payload) {
		if (notification === 'MODULES') {
			var fs = require('fs');
			fs.writeFile("modules/MMM-HTML-Controller/info/modules.txt", payload, function(err) {
    				if(err) {
        				return console.log(err);
    				}
    			console.log("The file was saved!");
			}); 
			var modules = payload.split(',');
			for (var m in modules) {
				module = modules[m];
				this.expressApp.get('/' + this.name + '/hide' + module, function(req, res) {
					res.send('Welcome');
					self.hideModule(req.route.path.split('hide')[1]);
				});
				this.expressApp.get('/' + this.name + '/show' + module, function(req, res) {
					res.send('Welcome');
					self.showModule(req.route.path.split('show')[1]);
				});
			}
		}
	},

	hideModule: function(name) { 
		this.sendSocketNotification("HIDE-MODULE", name);
	},
	showModule: function(name) { 
		this.sendSocketNotification("SHOW-MODULE", name);
	},
}); 
