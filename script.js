// change the image on click
const hats = ["images/Poro.png", "images/PoroFun.png", "images/PoshPoro.png", 
                "images/PoroCowboy.png", "images/PoroWizard.png"]
const currentHat = document.querySelector("#currentHat")
let index = 0

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



function changePoroName(){
    const nameForm = document.querySelector("#name-form")
    const name = document.querySelector("#name").value
    const title = document.querySelector("#title")
    
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
let isDarkMode = false
const body = document.body
const btnChangeDarkMode = document.querySelector(".colour-mode")

function changeDarkMode(){
    body.classList.toggle("dark-mode")
    body.classList.toggle("light-mode")
    if (isDarkMode === false){
        btnChangeDarkMode.textContent = "☀️"
        isDarkMode = true
        console.log("dark mode")
    }
    
    else if (isDarkMode === true){
        btnChangeDarkMode.textContent =  "🌑"
        isDarkMode = false
        console.log("light mode")
    }
}

function resetEverything(){
    currentHat.src = hats[0]
    discoTime = false
    alert("Poro's hat has been removed :(")
    console.log("Poro's hat has been removed :(")
}