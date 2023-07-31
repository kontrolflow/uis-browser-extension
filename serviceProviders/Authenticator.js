
export default class Authenticator {
    
    static test() {
        console.log("test Auth")
    }

    static isKeySet() {

        return new Promise((resolve) => {

            chrome.storage.local.get(["apiKey"]).then((result) => {
                console.log("Value currently is " + result.apiKey);
                if(typeof result.apiKey === 'string') {
                    // your code here
                    console.log("Key Set")
                    resolve(true)
                } else {
                    console.log('Key not Set')
                    resolve(false)
                }
            });

        })

    }

    static getKey() {

        return new Promise((resolve) => {

            chrome.storage.local.get(["apiKey"]).then((result) => {
                console.log("Value currently is " + result.apiKey);
                if(typeof result.apiKey === 'string') {
                    // your code here
                    console.log("Key Set")
                    resolve(result.apiKey)
                } else {
                    console.log('Key not Set')
                    resolve("")
                }
            });

        })

    }

    static saveKey(apiKey) {

        chrome.storage.local.set({ apiKey: apiKey }).then(() => {
            console.log("Value is set to " + apiKey);
        });

    }

    static deleteKey() {

        chrome.storage.local.set({ apiKey: null }).then(() => {
            console.log("API Key Deleted");
        });

    }

}