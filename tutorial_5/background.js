// Handle requests for passwords
chrome.runtime.onMessage.addListener(function(request) {
    if (request.type === 'request_password') {
        
        chrome.tabs.create({
            url: chrome.extension.getURL('dialog.html'),
            active: false
        }, function(tab) {
            
            var w = 440;
            var h = 220;
            var left = (screen.width/2)-(w/2);
            var top = (screen.height/2)-(h/2);
            
            // After the tab has been created, open a window to inject the tab
            chrome.windows.create({
                tabId: tab.id,
                type: 'popup',
                focused: true,
                height: h,
                width: w,
                top: top,
                left: left
                // incognito, top, left, ...
            });
        });
    }
});
function setPassword(password) {
    // Do something, eg..:
    console.log(password);
};
