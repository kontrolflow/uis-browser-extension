////////////      AutoTask Ticket Script     //////////// 
console.log("UIS Extension - Ticket Route")


///////      AutoTask Ticket Script     ///////
async function getClients(apiKey) {
    let url = "https://api.uis.tools/clients?apiKey=" + apiKey
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

function uisAutoTaskScript(clients) {

      console.log("Tis a Ticket")

      // Determine Client
      var haystackWithClient = document.getElementsByClassName("Text2")
      let client = haystackWithClient[32].textContent;
      console.log(client)
      
      // Pull Array of Client Links
      let links = clients[client]
      
      // Create ELement and Fill with Styled Buttons
      var content = document.getElementsByClassName('BodyContent')
      // console.log(elements[0]);
      
      let uisWorkbench = document.createElement("div");
      uisWorkbench.className = "Normal Section"
      
      let uisWorkbenchTitle = document.createElement("div");
      uisWorkbenchTitle.textContent = "Umbrella IT Workbench"
      uisWorkbenchTitle.style.textAlign = "center"
      uisWorkbenchTitle.style.fontSize = "2rem"
      uisWorkbenchTitle.style.padding = ".25rem"
      
      let uisWorkbenchTools = document.createElement("div");
      uisWorkbenchTools.style.padding = "0";
      uisWorkbenchTools.style.textAlign = "center";
      uisWorkbenchTools.style.display = "flex";
      uisWorkbenchTools.style.flexWrap = "wrap";
      uisWorkbenchTools.style.justifyContent = "center"
      
      links.forEach(function(link) {
        // console.log(link)
        // console.log(Object.keys(link)[0])
        let button = document.createElement("a")
        button.setAttribute('href', Object.values(link)[0])
        button.textContent = Object.keys(link)[0]
        button.target = "_blank"
        button.style.color = "white"
        button.style.padding = "5px 1rem"
        button.style.margin = "5px"
        button.style.fontSize = "1rem"
        // button.style.fontWeight = "bold"
        button.style.borderRadius = "5px"
        button.style.textDecoration = "none"
  
        button.style.backgroundColor = "grey"
        if(Object.keys(link)[0].includes("Xfinity")) { button.style.backgroundColor = "black" }
        if(Object.keys(link)[0].includes("ATT")) { button.style.backgroundColor = "#007ae2" }
        if(Object.keys(link)[0].includes("Meraki")) { button.style.backgroundColor = "#2eaa43" }
        if(Object.keys(link)[0].includes("Unifi")) { button.style.backgroundColor = "#00a0df" }
        if(Object.keys(link)[0].includes("Screen Connect")) { button.style.backgroundColor = "#c63030" }
        if(Object.keys(link)[0].includes("Passportal")) { button.style.backgroundColor = "#c046ff" }
        // if(Object.keys(link)[0].includes("Passportal")) { button.style.backgroundColor = "purple" }
        if(Object.keys(link)[0].includes("DNS Filter")) { button.style.backgroundColor = "#008ef3" }
        if(Object.keys(link)[0].includes("Liongard")) { button.style.backgroundColor = "#f3b020" }
        if(Object.keys(link)[0].includes("Cloudflare")) { button.style.backgroundColor = "#f6821f" }
        if(Object.keys(link)[0].includes("Dropsuite")) { button.style.backgroundColor = "#22afec" }
        if(Object.keys(link)[0].includes("Altaro")) { button.style.backgroundColor = "#bccf1b" }
        if(Object.keys(link)[0].includes("Admin Center")) { button.style.backgroundColor = "#484644" }
        if(Object.keys(link)[0].includes("Azure AD")) { button.style.backgroundColor = "#0078d4" }
        
        uisWorkbenchTools.append(button)
      })
      
      uisWorkbench.prepend(uisWorkbenchTitle)
      uisWorkbench.append(uisWorkbenchTools)
      
      // Inject Links into HTML
      content[0].prepend(uisWorkbench);
}

chrome.storage.local.get(["apiKey"]).then((result) => {
    getClients(result.apiKey).then(clients => {
        uisAutoTaskScript(clients)
    })
})

let quickNoteContainer = document.getElementsByClassName('QuickNoteEditorContainer')

quickNoteContainer[0].insertAdjacentHTML('afterend', 
    `<div 
        style="
            width:100%; 
            background-color:#192229; 
            margin:.75rem 0px;
            display: flex;
            flex-direction: column;
            align-items:center;
            border-radius:5px;
            overflow-x:hidden;
        " 
    >
        <div
            class=""
            style="
            +
                font-size: 1rem;
                padding: 0.25rem;
                width: 100%;
                background-color:#002a3a;
                text-align: center;
            "
        >
            Umbrella IT Open AI Prompt Tool
        </div>

        <textarea 
            name="comment" 
            form="usrform"
            id="promptTextBox"
            style=" width:80%; margin:1em;"
            placeholder="Enter OpenAI prompt here..."
        ></textarea>

        <button 
            id="submitPromptButton"
            style="margin-bottom:1em;"
        >
            Submit Prompt
        </button>

    </div>`
);

async function promptOpenAI(prompt) {

    let apiKey = await chrome.storage.local.get(["apiKey"]).then((result) => {
        return result.apiKey
    })

    let apiUrl = "https://api.uis.tools/prompt"

    let url = apiUrl + "?" + "apiKey=" + apiKey + "&prompt=" + encodeURIComponent(prompt)


    let response = await fetch(url);
    let data = await response.text()
    console.log(data)
    return data;
}

let promptTextBox = document.getElementById("promptTextBox")

let submitPromptButton = document.getElementById('submitPromptButton')

submitPromptButton.onclick = async function() {
    let aiResponse = await promptOpenAI(promptTextBox.value)
    // alert(aiResponse)

    let responseBox = document.getElementsByTagName('textarea')[0]
    responseBox.value = aiResponse
};

///////    Password Generation Feature    ///////

// Create Button

////////////    Features to Add     ////////////

// function autoCheckNotifyContact() {

// }

