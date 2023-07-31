console.log("Here")

const showAllDevicesToggle = document.querySelector('[data-id="showAllDevices"]')

console.log(showAllDevicesToggle)

const checkForToggle = setInterval(() => {
    console.log("checking")
    const showAllDevicesToggle1 = document.querySelector('[data-id="showAllDevices"]')
    console.log(showAllDevicesToggle1)

    if(showAllDevicesToggle1 !== null) {
        console.log("toggle exists")
        console.log()
        // found.click()
        clearInterval(checkForToggle)
    }
}, 1000)