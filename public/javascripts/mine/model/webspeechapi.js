var WebSpeechApiModel = Backbone.Model.extend({

	webSpeechApiObj: null,

	initialize: function(){
		console.log("WebSpeechApiModel");

		this.initializeWebSpeechApi();
	},

	initializeWebSpeechApi: function(){
		console.log("initializeWebSpeechApi");

		this.webSpeechApiObj = new webkitSpeechRecognition();
		this.webSpeechApiObj.continuous = this.get("isContinuous");
		this.webSpeechApiObj.lang = this.get("lang");

		this.webSpeechApiObj.onresult = this.onRecogResult.bind(this);
		this.webSpeechApiObj.onaudiostart = this.onRecogAudioStart.bind(this);
		this.webSpeechApiObj.onaudioend = this.onRecogAudioEnd.bind(this);
		this.webSpeechApiObj.onsoundstart = this.onRecogSoundStart.bind(this);
		this.webSpeechApiObj.onsoundend = this.onRecogSoundEnd.bind(this);
		this.webSpeechApiObj.onspeechstart = this.onRecogSpeechStart.bind(this);
		this.webSpeechApiObj.onspeechend = this.onRecogSpeechEnd.bind(this);
		this.webSpeechApiObj.onnomatch = this.onRecogNoMatch.bind(this);
		this.webSpeechApiObj.onerror = this.onRecogError.bind(this);
		this.webSpeechApiObj.onstart = this.onRecogStart.bind(this);
		this.webSpeechApiObj.onend = this.onRecogEnd.bind(this);
		
	},

    defaults: {
		"recogStatus" : "Not Set",
		"recogText" : "Not Set",
		"isContinuous" : false,
		"lang" : "ja",
	},

	startRecognition: function()
	{
		if(null == this.webSpeechApiObj) return;

		this.webSpeechApiObj.start();
	},

	stopRecognition: function()
	{
		if(null == this.webSpeechApiObj) return;

		this.webSpeechApiObj.stop();
	},

	update: function(){
		console.log("update");
	},

	getStatus: function()
	{
		return this.get("recogStatus");
	},

	getRecogText: function()
	{
		return this.get("recogText");
	},

	toggleContinuous: function()
	{
		console.log("toggleContinuous");

		this.set("isContinuous", !this.get("isContinuous"));
		this.initializeWebSpeechApi();

		console.log("continuous:" + this.get("isContinuous"));
	},

	// Recognition event handlers
	onRecogResult: function(event){
		console.log("onRecogResult");
		console.log(event);

		var resultIndex = event.resultIndex;
		console.log("resultIndex:" + resultIndex);

		var str = event.results[resultIndex][0].transcript;

		this.set("recogText", str);
	},

	onRecogAudioStart: function(event)
	{
		console.log("onRecogAudioStart");
		console.log(event);

		this.set("recogStatus", event.type);
	},

	onRecogAudioEnd: function(event)
	{
		console.log("onRecogAudioEnd");
		console.log(event);

		this.set("recogStatus", event.type);
	},

	onRecogSoundStart: function(event)
	{
		console.log("onRecogSoundStart");
		console.log(event);

		this.set("recogStatus", event.type);
	},

	onRecogSoundEnd: function(event)
	{
		console.log("onRecogSoundStart");
		console.log(event);

		this.set("recogStatus", event.type);
	},

	onRecogSpeechStart: function(event)
	{
		console.log("onRecogSpeechStart");
		console.log(event);

		this.set("recogStatus", event.type);
	},

	onRecogSpeechEnd: function(event)
	{
		console.log("onRecogSpeechStart");
		console.log(event);

		this.set("recogStatus", event.type);
	},

    onRecogNoMatch: function(event)
	{
		console.log("onRecogNoMatch");
		console.log(event);

		this.set("recogStatus", event.type);
	},

	onRecogError: function(event)
	{
		console.log("onRecogError");
		console.log(event);

		this.set("recogStatus", event.type);
	},

	onRecogStart: function(event)
	{
		console.log("onRecogStart");
		console.log(event);

		this.set("recogStatus", event.type);
	},

	onRecogEnd: function(event)
	{
		console.log("onRecogEnd");
		console.log(event);

		this.set("recogStatus", event.type);
	}

});