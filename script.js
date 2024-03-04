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
    }

    else {
        currentHat.src = hats[index - 1]
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
    }

    else {
        currentHat.src = hats[index + 1]
        console.log("hello")
    }
}

// reset to no hat 
function reset(){
    currentHat.src = hats[0]
}

// changing between dark and light mode
//choice = prompt()
//style.backgroundColor