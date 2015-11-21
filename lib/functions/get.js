kaze.get = function(url, callback) {
	var request = new XMLHttpRequest();
	request.open('GET', url, true);

	request.onload = function() {
		if(request.status >= 200 && request.status < 400) {
			callback(request.responseText);
		}
	};

	request.onerror = function() {
		console.error('Error requesting ' + url);
	};

	request.send();

	return request;
};