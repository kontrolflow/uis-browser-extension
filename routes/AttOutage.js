// https://www.att.com/outages/?address=1632%20MINERVA%20AVE%20JACKSONVILLE%20FL%2032207

// Get the Zip from the URL
var url_string = window.location.href; 
var url = new URL(url_string)
var zip = Number(url.searchParams.get("zip"))
console.log(zip);

// Copy the Zip to the Clipboard
navigator.clipboard.writeText(zip)

// Get the radio button to select service
radioInput = document.querySelector('[aria-label="AT&T Internet, AT&T Phone, or U-verse® TV"]')
radioInput.click()

// Get the zipcode input box and enter zipcode
zipInput = document.querySelector('[aria-label="Enter Zip Code"]')
zipInput.placeholder = zip + " or Ctrl+V, Enter"
// zipInput.value = Number(zip)
zipInput.focus()

// Get the Check for Outage Button Element
// var aTags = document.getElementsByTagName("button");
// var searchText = "Check for outages";
// var found;

// for (var i = 0; i < aTags.length; i++) {
//   if (aTags[i].textContent == searchText) {
//     found = aTags[i];
//     break;
//   }
// }

// Check the ZipInput Field on an interval until the zip matches the tenants
// const checkMatch = setInterval(() => {
//     if(zipInput.value == zip) {
//         console.log("match")
//         found.click()
//         clearInterval(checkMatch)
//     }
// }, 50)


// zipInput.addEventListener("input", checkZip)

// function checkZip(e) {
//     console.log("changed")
// }

// zipInput.value = "33333"
// const press = new KeyboardEvent('keydown', '1')
// zipInput.dispatchEvent(press)
// zipInput.dispatchEvent(new KeyboardEvent('keydown', {'key': 1}))

// Get the zipcode input box and enter zipcode
// setTimeout(() => {
//     searchInput = document.getElementById("z1-searchfield")
//     searchInput.placeholder = "search"
    // searchInput.dispatchEvent(new KeyboardEvent('keydown', {'key': }))
//     const event = new KeyboardEvent('keydown', { '22' })
//     searchInput.dispatchEvent(event);
// }, 2000)

// zipInput.focus()