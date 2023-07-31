import PasswordGenerator from "../serviceProviders/PasswordGenerator.js";

// Generate Password Feature
let generatePasswordButton = document.getElementById("generate-password-button")
generatePasswordButton.addEventListener("click", async function() {
    console.log("Generate Password Button Clicked")
    
    // Generate the Password
    let password = await PasswordGenerator.create()

    // Show the Password
    let generatedPasswordDisplay = document.getElementById("generated-password-display")
    generatedPasswordDisplay.innerText = password

    // Copy the Password to the 
    navigator.clipboard.writeText(password);


})