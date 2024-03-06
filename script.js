const hats = ["images/Poro.png", "images/PoroFun.png", "images/PoshPoro.png", 
                "images/PoroCowboy.png", "images/PoroWizard.png"]
const currentHat = document.querySelector("#currentHat")
const nameForm = document.querySelector("#name-form")
const title = document.querySelector("#title")
const body = document.body
const btnChangeDarkMode = document.querySelector(".colour-mode")
let index = 0
let isDarkMode = false
let hadDiscoAlert = false
let discoTime


// Get the previous hat in the array hats
function previousHat() {
    // go through hats array
    for (let i = 0; i < hats.length; i++) {

        // split URL to get the current hat image. This is the URL before slice -> http://127.0.0.1:5500/images/blank.jpg
        const currentHatSrc = currentHat.src.slice(22) // after slice -> images/blank.jpg

        // Find the index of the current hat in the array hats
        if (currentHatSrc === hats[i]) {
            index = i
        }
    }

    // If Index is 0, we cannot go to the previous hat, so we take last item in the array hats
    if (index === 0) {
        currentHat.src = hats[hats.length - 1]
        console.log("Hat changed to " + hats[hats.length - 1])
    }
    // Otherwise we take the previous item in array
    else {
        currentHat.src = hats[index - 1]
        console.log("Hat changed to " + hats[index - 1])
    }
}

// Get the next hat in the array hats
function nextHat() {
    for (let i = 0; i < hats.length; i++) {
        // split URL to get the current hat image. This is the URL before slice -> http://127.0.0.1:5500/images/blank.jpg
        const currentHatSrc = currentHat.src.slice(22) // after slice -> images/blank.jpg

        // Find the index of the current hat in the array hats
        if (currentHatSrc == hats[i]) {
            index = i
        }
    }
    // If index is the last item in the array, we cannot go to the next item, so we get the first item
    if (index === hats.length - 1) {
        currentHat.src = hats[0]
        console.log("Hat changed to " + hats[0])
    }

    // Otherwise we take the next item in array
    else {
        currentHat.src = hats[index + 1]
        console.log("Hat changed to " + hats[index + 1])
    }
}


// Add name to the top of the webpage, removing title and input box
function setPoroName(){
    const name = document.querySelector("#name").value
    
    if (name !== ""){
        nameForm.classList.add("hidden")
        title.textContent = name
        title.classList.add("title")
        console.log("Poro's name has been changed")
    }
    else{
        alert("Poro has no name :(")
    }
}

// add dark mode and light mode using bool
function changeDarkMode(){
    if (isDarkMode === false){
        btnChangeDarkMode.textContent = "☀️"
        body.style = "background-color: #334556; color: white"
        isDarkMode = true
        console.log("dark mode")
    }
    
    else if (isDarkMode === true){
        btnChangeDarkMode.textContent =  "🌑"
        body.style = "background-color: #80add7; color: #334556"
        isDarkMode = false
        console.log("light mode")
    }
}


function disco(){
    // ensure that alert always pops up on first click
    if (hadDiscoAlert === false){
        if (confirm("This involves flashing colours, to stop click the reset button. Are you sure you wanna do this?")){
            hadDiscoAlert = true
        }
    }
    if (hadDiscoAlert){
        // get random hex value
        let num = (Math.random() * 0xfffff * 1000000).toString(16)
        let hex = num.slice(0, 6)
        body.style = `background-color:#${hex}`
        discoTime = setTimeout(disco, 400)
    }
}

function resetEverything(){
    currentHat.src = hats[0]
    nameForm.classList.remove("hidden")
    title.classList.remove("title")
    title.textContent = "Welcome to Poro Dress Up!"
    clearTimeout(discoTime)
    // reset background colour to what user chose
    if (isDarkMode){
        body.style = "background-color: #334556; color: white"
    }
    else{
        body.style = "background-color: #80add7; color: #334556"
    }
    alert("Reset")
    console.log("Reset")
}