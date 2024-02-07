const boxes = [
document.getElementById("boxOne"),
document.getElementById("boxTwo"),
document.getElementById("boxThree"),
document.getElementById("boxFour"),
document.getElementById("boxFive"),
document.getElementById("boxSix"),
document.getElementById("boxSeven"),
document.getElementById("boxEight"),
document.getElementById("boxNine"),
];

const messageDisplay = document.getElementById("messageContainer")
const allBoxes = document.querySelectorAll(".box");

allBoxes.forEach((element, i) => {
    element.addEventListener("click", function() {
            frontGame(boxes[i], playTime, i)
    })
})

function frontGame(btn, value, place) {

    if (btn.textContent != "" ) {
        return console.log("aqui não da amigo")  
    }

    else if (value == "cross") {
        btn.textContent = "X"
        playerOne.playGame(place)
     }

    else if (value == "circle") {
        btn.textContent = "O"
        playerTwo.playGame(place)
    }
}

