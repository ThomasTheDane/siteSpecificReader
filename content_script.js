console.log('reading');

// $('body').remove();

$.get(chrome.extension.getURL('/speedReader.html'), function(data) {
    $(data).appendTo('body');
},
function(){
	console.log("shit");
});