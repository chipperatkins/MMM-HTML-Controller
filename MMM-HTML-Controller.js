Module.register("MMM-HTML-Controller", {
	hideAll: function () {
		MM.getModules().enumerate(function(module) {
				module.hide(1000, function() {
					Log.log(module.name + ' is hidden.');
				});
			});
	}
});
