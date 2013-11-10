var StatusView = Backbone.View.extend({

	recogTextElm : null,

	initialize: function()
	{
		console.log("StatusView initialize");

	},

	render: function(){
		console.log("render");

	},

	events: {
		"click #btn_start": "inputClicked"
	}
});