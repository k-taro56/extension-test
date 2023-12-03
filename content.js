chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log("Data from API:", message.data);
    return true;
});