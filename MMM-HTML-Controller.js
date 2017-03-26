Module.register("MMM-HTML-Controller", {

	start: function() {
		this.sendSocketNotification("up and running", " ");
	},

	socketNotificationReceived: function(notification, payload) {
		if (notification === 'GET-MODULES') {
			modules = MM.getModules();
			var list = "";
			for (var m in modules) {
				module = modules[m];
				list += module.name + ',';
			}
			this.sendSocketNotification("MODULES", list);
		}
		else if (notification === 'HIDE-MODULE') {
			modules = MM.getModules();
			for (var m in modules) {
				module = modules[m];
				if (module.name === payload) {
					module.hide(1000, {lockString: "MMM-HTML-CONTROLLER"});
				}
			}
		}
		else if (notification === 'SHOW-MODULE') {
			modules = MM.getModules();
			for (var m in modules) {
				module = modules[m];
				if (module.name === payload) {
					module.show(1000, {lockString: "MMM-HTML-CONTROLLER"});
				}
			}
		}
	},
});
