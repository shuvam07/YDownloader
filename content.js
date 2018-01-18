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

aync await function openNewBackgroundTab(downUrl){
    var a = document.createElement("a");
    a.href = downUrl;
    var evt = document.createEvent("MouseEvents");
    //the tenth parameter of initMouseEvent sets ctrl key
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                                true, false, false, false, 0, null);
    a.dispatchEvent(evt);

}

var url = window.location.href;
var downUrl = url.substr(0,pos)+"ss"+url.substr(pos);
window.open(downUrl)
chrome.tabs.create({ url: downUrl });
// openNewBackgroundTab(downUrl)



