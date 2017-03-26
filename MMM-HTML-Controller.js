Module.register("MMM-HTML-Controller", {

	start: function() {
		this.sendSocketNotification("up and running", " ");
	},

	socketNotificationReceived: function(notification, payload) {
		if (notification === 'GET-MODULES') {
			payload.send('Welcome');
		}
	},
});
