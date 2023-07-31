import Authenticator from "../serviceProviders/Authenticator.js"

console.log("Popup Page Javascript")


if(await Authenticator.isKeySet()) {

    let section = document.getElementById("logged-in-section")
    section.style.display="block"

    let logoutButton = document.getElementById("logoutButton")
    logoutButton.addEventListener("click", function(event) {
        Authenticator.deleteKey()
        event.preventDefault()
        location.reload()
    });

} else {

    let section = document.getElementById("logged-out-section")
    section.style.display="block"

    let form = document.getElementById("logged-out-section")
    form.addEventListener("submit", function(event) {
        Authenticator.saveKey(document.getElementById("api-key-input").value)
        event.preventDefault()
        location.reload()
    })

    let authenticateButton = document.getElementById("authenticate-button")
    authenticateButton.addEventListener("click", function(event) {
        Authenticator.saveKey(document.getElementById("api-key-input").value)
        location.reload()
    })
    
}

/////// Password Generation Feature ///////

// Add Event Listener to Button Element

// On Button Click

    // Generate the Password

    // Change the Button Display to the Password

    // Add the Password to the Clipboard

