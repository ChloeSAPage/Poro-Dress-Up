// change the image on click
const hats = ["images/blank.jpg", "images/magicHat.jpg", "images/topHat.jpg"]
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

function resetNoHat(){
    currentHat.src = hats[0]
    alert("Poro's hat has been removed :(")
    console.log("Poro's hat has been removed :(")
}


function changePoroName(){
    let name = document.querySelector("name").value
    // change welcome to poro dress up to poro's name
}

// add dark mode and light mode using bool 

let name = prompt("What is ur poro name")