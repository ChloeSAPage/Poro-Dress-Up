const baseURL = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1)
const outfits = [
    baseURL + "images/Poro.png",
    baseURL + "images/PoroFun.png",
    baseURL + "images/PoshPoro.png",
    baseURL + "images/PoroCowboy.png",
    baseURL + "images/PoroWizard.png"
]
// const outfits = ["images/Poro.png", "images/PoroFun.png", "images/PoshPoro.png", "images/PoroCowboy.png", "images/PoroWizard.png"]
const currentOutfit = document.querySelector("#current-outfit")
const nameForm = document.querySelector("#name-form")
const title = document.querySelector("#title")
const body = document.body
const btnChangeDarkMode = document.querySelector(".colour-mode")
let index = 0
let isDarkMode = false
let hadDiscoAlert = false
let discoTime


// Get the previous outfit in the array outfits
function previousOutfit() {
    // go through outfits array
    for (let i = 0; i < outfits.length; i++) {
        const currentOutfitSrc = currentOutfit.src
        
        // Find the index of the current outfit in the array outfits
        if (currentOutfitSrc === outfits[i]) {
            index = i
        }
    }

    // If Index is 0, we cannot go to the previous outfit, so we take last item in the array outfits
    if (index === 0) {
        currentOutfit.src = outfits[outfits.length - 1]
        console.log("outfit changed to " + outfits[outfits.length - 1])
    }
    // Otherwise we take the previous item in array
    else {
        currentOutfit.src = outfits[index - 1]
        console.log("outfit changed to " + outfits[index - 1])
    }
}

// Get the next outfit in the array outfits
function nextOutfit() {
    for (let i = 0; i < outfits.length; i++) {
        const currentOutfitSrc = currentOutfit.src

        // Find the index of the current outfit in the array outfits
        if (currentOutfitSrc == outfits[i]) {
            index = i
        }
    }
    // If index is the last item in the array, we cannot go to the next item, so we get the first item
    if (index === outfits.length - 1) {
        currentOutfit.src = outfits[0]
        console.log("outfit changed to " + outfits[0])
    }

    // Otherwise we take the next item in array
    else {
        currentOutfit.src = outfits[index + 1]
        console.log("outfit changed to " + outfits[index + 1])
    }
}


function setPoroName(){
    const name = document.querySelector("#name").value
    // Check if input was blank
    if (name !== ""){
        // Add name to the top of the webpage, removing title and input box
        nameForm.classList.add("hidden")
        title.textContent = name
        title.classList.add("title")
        console.log("Poro's name has been changed")
    }
    else{
        alert("Poro has no name :(")
    }
}

// add dark mode and light mode
function changeDarkMode(){
    // if not in dark mode change to dark mode
    if (isDarkMode === false){
        btnChangeDarkMode.textContent = "☀️"
        body.style = "background-color: #334556; color: white"
        isDarkMode = true
        console.log("dark mode")
    }
    
    // If in dark mode change to light mode
    else if (isDarkMode === true){
        btnChangeDarkMode.textContent =  "🌑"
        body.style = "background-color: #80add7; color: #334556"
        isDarkMode = false
        console.log("light mode")
    }
}

// changes the background colour randomly
function disco(){
    // ensure that confirm always pops up on first click
    if (hadDiscoAlert === false){
        if (confirm("This involves flashing colours, to stop click the reset button. Are you sure you wanna do this?")){
            hadDiscoAlert = true
        }
    }
    // if user clicks ok on confirm then disco time
    if (hadDiscoAlert){
        // get random hex value
        let num = (Math.random() * 0xfffff * 1000000).toString(16)
        let hex = num.slice(0, 6)
        body.style = `background-color:#${hex}`
        // set new colour every 400 ms
        discoTime = setTimeout(disco, 400)
    }
}

function resetEverything(){
    // return to first outfit
    currentOutfit.src = outfits[0]

    // add the ability to change name back
    nameForm.classList.remove("hidden")
    title.classList.remove("title")
    title.textContent = "Welcome to Poro Dress Up!"

    // stop disco function
    clearTimeout(discoTime)

    // reset background colour to what user chose
    if (isDarkMode){
        body.style = "background-color: #334556; color: white"
    }
    else{
        body.style = "background-color: #80add7; color: #334556"
    }
    alert("Reset Successful!")
    console.log("Reset Successful!")
}
