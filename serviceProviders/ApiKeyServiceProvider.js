chrome.storage.local.set({ apiKey: apiKey }).then(() => {
    console.log("Value is set to " + apiKey);
});