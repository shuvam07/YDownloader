// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     var url = tab.url;
//     // console.log("affa")
//     console.log(url)

//     // if (changeInfo.url !== undefined && info.status == "loading" && url !== null) {
//     	// chrome.tabs.sendMessage(tab.id, "Changed");
//     // }
// });
// chrome.tabs.onCreated.addListener(function(tabId, changeInfo, tab) {
// 	console.log(tab)
//     var url = tab.url;
//     console.log("affa")
//     console.log(url)
// //     if (info.status == "complete" && url !== null) {
//     	// chrome.tabs.sendMessage(tab.id, "Changed");
// //     }
// });
// chrome.runtime.onMessage.addListener(function(response,resolve,send){
// 	var URL = response;
// 	console.log(URL)
// 	// chrome.windows.getAll({populate:true},function(windows){
// 	//   windows.forEach(function(window){
// 	//     window.tabs.forEach(function(tab){
// 	//       //collect all of the urls here, I will just log them instead
// 	//       console.log(tab.url);
// 	//     });
// 	//   });
// 	// });
// 	// window.open(url);
// })
var win,url;
chrome.alarms.onAlarm.addListener(function(alarm){
	console.log("alarm");
	console.log(alarm);
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		console.log(tabs)
		console.log(win.window)
	console.log(win.document)
		chrome.tabs.sendMessage(tabs[0].id,{state:"ready",win:win},function(response){
		});
	});
});

chrome.runtime.onMessage.addListener(function(response,resolve,send){
	win = window.open(response.url, 'youtubeWindow');
	console.log("response")
	console.log(response)
	console.log(win.window)
	console.log(win.document)
	url=response.url;
	if(response.state=="waiting")
		chrome.alarms.create("Start",{periodInMinutes:1});
})
