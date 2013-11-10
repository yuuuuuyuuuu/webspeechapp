$(document).ready(function(){
	console.log("document.ready");

	var webSpeechApiModel = new WebSpeechApiModel();

	var app = $("#app");
	var mainView = new MainView({el:app ,model: webSpeechApiModel});

	//$("#app").append(mainView.el);
});