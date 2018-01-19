// $(document).ready(function() {
// 	$('body#body').on('keydown', function(event) {
// 	    if(event.keyCode == 32) {
// 	        $("div#movie_player").tabIndex = 0;
// 			$("div#movie_player").focus();
// 			window.scrollTo(0, 0);
// 	    }
// 	});
// 	$('input').keydown(function (event) {
// 		if(event.keyCode == 32){
// 			event.stopPropagation();
// 			return true;
// 		}
// 	});
// 	// var loc;
// 	function focus_player () {
// 		window.scrollTo(0, 0);
// 		// loc = window.location.href;
// 		var x = $('button[class="ytp-button ytp-settings-button"]').parent().parent().parent().children('.ytp-panelpopup').children('.ytp-panel').children('.ytp-panel-content').children('.ytp-menu');
// 		$('button[class="ytp-button ytp-settings-button"]').click();
// 		$('div[class="html5-video-container"]').click();
// 		for (var i = 0; i < x.children().length; i++) {
// 			if(x.children().eq(i).children().eq(0).html() == "Annotations" && x.children().eq(i).attr('aria-checked') == "true"){
// 				x.children().eq(i).children().eq(0).click();
// 			}
// 		};
// 		$("div#movie_player").tabIndex = 0;
// 		$("div#movie_player").focus();
// 	}
// 	setTimeout(focus_player,2000);
// 	$("div#movie_player").tabIndex = 0;
// 	$("div#movie_player").focus();
// 	chrome.runtime.onMessage.addListener(function(request, sender, callback) {
//    		if(request == "Changed"){
//    			// if(window.location.href!=loc){
//    				setTimeout(focus_player,1000);
//    				// loc = window.location.href;
//    			// }
//    		}

// 	});
// });

// function openNewBackgroundTab(downUrl){
//     var a = document.createElement("a");
//     a.href = downUrl;
//     var evt = document.createEvent("MouseEvents");
//     //the tenth parameter of initMouseEvent sets ctrl key
//     evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
//                                 true, false, false, false, 0, null);
//     a.dispatchEvent(evt);

// }
function createIframe(url){
	console.log("dsg")
	//document.body.appendChild("<div id='hiddenDownloader'></div>");
	 var iframe;
	   iframe = document.getElementById("hiddenDownloader");
	   if (iframe == null) {
	       iframe = document.createElement('iframe');
	       iframe.id = "hiddenDownloader";
	       iframe.style.visibility = 'hidden';
	       document.body.appendChild(iframe);
	   }
	   iframe.src = url;
	// var iframe = '<iframe class = "save-form-dlink" style="width:0;height:0;border:0; border:none;" src='+url+'></iframe>';
	// $(document.body).append(iframe);
}
function createDiv(res){
	var div= document.createElement("div");
	div.id= "save-form-dLink"
	document.body.appendChild(div)
	$("#save-form-dLink").html(res);
	
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  var self =this;
  $(win.document).ready(function(){
  	setTimeout(function(){
  		console.log("faf")
  		console.log(self.win)
  		// console.log($(win.document).contents().find("'#sf_url").html())
  	},5000)
  	
  })
}

var url = window.location.href;
var pos = url.search("youtube");
var saveFormUrl = url.substr(0,pos)+"ss"+url.substr(pos);
// window.open(downUrl)
console.log(saveFormUrl);
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



