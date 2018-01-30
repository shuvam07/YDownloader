// var win;
function openInNewTab(url) {
	var that =this;
	chrome.runtime.sendMessage({state:"waiting",url:url},function(response){
	});
}

chrome.runtime.onMessage.addListener(function(response,resolve,send){
	console.log("Hello")
	console.log(response);
	if(response.state=="ready")
		this.start();
});

function start(){
	console.log("INSt");
	console.log(this);
	console.log(win);
	console.log(this.win);
}

// function bindFunc(){
// 	console.log(this.win);
// 	console.log(win);
// }

var url = window.location.href;
var pos = url.search("youtube");
var saveFormUrl = url.substr(0,pos)+"ss"+url.substr(pos);
// window.open(downUrl)
// console.log(saveFormUrl);
openInNewTab(saveFormUrl);





// createIframe(saveFormUrl);
// $.ajax({
//   url: saveFormUrl,
//   dataType: "html",
//   context: document.body,
//   success : function(res){
//   	createDiv(res)}
// })
// chrome.runtime.sendMessage(downUrl);
// openNewBackgroundTab(downUrl)
// function createIframe(url){
// 	console.log("dsg")
// 	//document.body.appendChild("<div id='hiddenDownloader'></div>");
// 	 var iframe;
// 	   iframe = document.getElementById("hiddenDownloader");
// 	   if (iframe == null) {
// 	       iframe = document.createElement('iframe');
// 	       iframe.id = "hiddenDownloader";
// 	       iframe.style.visibility = 'hidden';
// 	       document.body.appendChild(iframe);
// 	   }
// 	   iframe.src = url;
// 	// var iframe = '<iframe class = "save-form-dlink" style="width:0;height:0;border:0; border:none;" src='+url+'></iframe>';
// 	// $(document.body).append(iframe);
// }
// function createDiv(res){
// 	var div= document.createElement("div");
// 	div.id= "save-form-dLink"
// 	document.body.appendChild(div)
// 	$("#save-form-dLink").html(res);
	
// }



