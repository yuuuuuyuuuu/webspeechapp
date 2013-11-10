var MainView = Backbone.View.extend({

	recogTextArea : null,
	recogStatusArea : null,


	events: {
		"click #btn_start" : "startClicked",
		"click #btn_stop" : "stopClicked",
		"click .btn_lang" : "langClicked",
		"click .btn_continuous" : "continuousClicked" 
	},

	initialize: function()
	{
		console.log("MainView initialize");

		this.recogTextArea = this.$el.find("#textarea_recog");
		this.recogStatusArea = this.$el.find("#textarea_status");

		this.listenTo(this.model, "change:recogText", this.updateText);
		this.listenTo(this.model, "change:recogStatus", this.updateStatus);

	},

	updateText: function()
	{
		console.log("updateText");

		var recogText = this.recogTextArea.val();
		recogText += " " + this.model.getRecogText();
		this.recogTextArea.val(recogText + "\n");
	},

	updateStatus: function()
	{
		console.log("updateStatus");

		var status = this.recogStatusArea.val();
		var date = new Date();
		status += date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + this.model.getStatus();
		this.recogStatusArea.val(status + "\n");
	},

	render: function(){
		console.log("render");
	},

	startClicked: function()
	{
		console.log("startClickded");

		this.model.startRecognition();
	},

	stopClicked: function()
	{
		console.log("stopClickded");

		this.model.stopRecognition();
	},

	langClicked: function()
	{
		console.log("langClickded");
	},

	continuousClicked: function()
	{
		console.log("continuousClickded");

		//var isContinuousActive = $("#btn_continuous").hasClass();
		this.model.toggleContinuous();
	}
});