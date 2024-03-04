// change the image on click
const hats = ["images/blank.jpg", "images/magicHat.jpg", "images/topHat.jpg"]
const currentHat = document.querySelector("#currentHat")
let index = 0

// previous hat
function previousHat() {
    for (let i = 0; i < hats.length; i++) {
        // split URL http://127.0.0.1:5500/images/blank.jpg
        const currentHatSrc = currentHat.src.slice(22)

        if (currentHatSrc === hats[i]) {
            index = i
        }
    }

    if (index === 0) {
        currentHat.src = hats[hats.length - 1]
        console.log("Hat changed to " + hats[hats.length - 1])
    }

    else {
        currentHat.src = hats[index - 1]
        console.log("Hat changed to " + hats[index - 1])
    }
}

// next hat
function nextHat() {
    for (let i = 0; i < hats.length; i++) {
        // split URL http://127.0.0.1:5500/images/blank.jpg
        const currentHatSrc = currentHat.src.slice(22)

        if (currentHatSrc == hats[i]) {
            index = i
        }
    }
    if (index === hats.length - 1) {
        currentHat.src = hats[0]
        console.log("Hat changed to " + hats[0])
        
    }

    else {
        currentHat.src = hats[index + 1]
        console.log("Hat changed to " + hats[index + 1])
    }
}

// reset to no hat 
function reset(){
    currentHat.src = hats[0]
    alert("Poro's hat has been removed :(")
    console.log("Poro's hat has been removed :(")
}

// Change Poro's name
function changeName(){
    let name = document.querySelector("name").value
    // change welcome to poro dress up to poro's name
}

// add dark mode and light mode using bool 

let name = prompt("What is ur poro name")