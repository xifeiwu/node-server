console.log('in file xhr.js');
var url = 'http://127.0.0.1:8089/js/CORS.js';
var baidu_url = 'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/voice/js/voice_8e6294f2.js';

function connectServerByXHR() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    console.log('readyState: ' + xhr.readyState);
    console.log('status: ' + xhr.status);
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
    } else {
      console.log('Error', xhr.statusText);
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
}

var handleResponse = function(response) {
  console.log(response);
}
function connectServerByJSONP() {
  var script = document.createElement('script');
  script.src = url + '?callback=handleResponse';
  document.body.insertBefore(script, document.body.firstChild);
}

window.addEventListener('load', function() {
  connectServerByJSONP();
  // connectServerByXHR();
});
