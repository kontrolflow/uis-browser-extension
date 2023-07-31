import Authenticator from "../serviceProviders/Authenticator.js"

console.log("Popup Page Javascript")


if(await Authenticator.isKeySet()) {

    let button = document.getElementById("deleteKeyButton")
    button.style.display="inline"
    button.addEventListener("submit", function(event) {
        Authenticator.deleteKey()
        event.preventDefault()
        location.reload()
    });

} else {

    let form = document.getElementById("apiKeyForm")
    form.style.display="inline"
    form.addEventListener("submit", function(event) {
        Authenticator.saveKey(document.getElementById("apiKey").value)
        event.preventDefault()
        location.reload()
    })
    
}

/////// Password Generation Feature ///////

// Add Event Listener to Button Element

// On Button Click

    // Generate the Password

    // Change the Button Display to the Password

    // Add the Password to the Clipboard

