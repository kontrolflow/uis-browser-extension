// https://www.xfinity.com/support/status-map?address=1632%20MINERVA%20AVE%20JACKSONVILLE%20FL%2032207
// https://www.xfinity.com/support/status-map?address=1000%20VICARS%20LANDING%20WAY%20PONTE%20VEDRA%20BEACH%20FL%2032082
// https://www.xfinity.com/support/status-map?address=1301%20RIVERPLACE%20BLVD%20JACKSONVILLE%20FL%2032207

var url_string = window.location.href; 
var url = new URL(url_string)
var address = url.searchParams.get("address")
console.log(address);
// console.log("Mr. Covington")

var searchBox = document.getElementById("searchInput");
console.log(searchBox)

// setTimeout(() => {
//     console.log("this is the first message");
//     var searchBox = document.getElementById("searchInput");
//     searchBox.value = address;
// }, 7000);

function inputAddress() {
    var searchBox = document.getElementById("searchInput")
    if(searchBox !== null) {
        searchBox.value = address
        clearInterval(myInterval)
    }
}

myInterval = setInterval(inputAddress, 500);