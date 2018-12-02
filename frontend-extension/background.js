chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method === "GET") {
    	// var queryUrl = 'http://54.153.35.244:3000/';
    	var queryUrl = 'https://hn-timelapse.herokuapp.com/';
    	console.log(queryUrl+request.url);

    	request.url = queryUrl+request.url;

      $.ajax(request)
          .then(sendResponse)
          .fail(sendResponse);
      return true;
    }
});