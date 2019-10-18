chrome.browserAction.onClicked.addListener(function(tab) {

    var url = new URL(tab.url);
    var tinyapi = "http://tinyurl.com/api-create.php?url=" + url.hostname + url.pathname;

    xhttp = new XMLHttpRequest();
    xhttp.open("GET", tinyapi, false);
    xhttp.send();    
    var tinyurl = xhttp.response;
    var outlineurl = "http://outline.com/" + tinyurl

    chrome.tabs.update({url: outlineurl});

});

