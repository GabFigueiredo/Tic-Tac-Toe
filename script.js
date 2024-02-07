let emptyBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let totalTurns = 0
let playTime = "cross"

function choice(pick) {
    
    const playGame = (place) => {

        totalTurns++
        const gameMovement = messages(pick)

        if (emptyBoard[place] != 0) {
            return console.log("já está ocupado")
        }
        
        if (playTime == "cross") {
            emptyBoard[place] = 1
            playTime = "circle";
            gameMovement.circleTurn()
        }
        else if (playTime == "circle") {
            emptyBoard[place] = 2;
            playTime = "cross";
            gameMovement.crossTurn();
        }
        
        console.log(emptyBoard)

        const result = winConditions()

        if (result === "Win" ) {
            gameMovement.playerWin()
        }
        
        else if (result == "Draw") {
            gameMovement.draw()
        }
    }

    return { playGame }    
}

function winConditions() {
    for(let i = 0; i < 9; i += 3) {
        if (emptyBoard[i] != 0 && emptyBoard[i+1] == emptyBoard[i] && emptyBoard[i + 2] == emptyBoard[i]) {
            console.log("Vitória Horizontal")
            resetGame()
            return "Win"
        }
    }
    for (let i = 0; i < 9; i++) {
        if (emptyBoard[i] != 0 && emptyBoard[i+3] == emptyBoard[i] && emptyBoard[i+6] == emptyBoard[i]) {
            console.log("Vitória Vertical")
            resetGame()
            return "Win"
        }
    } 
    if (emptyBoard[0] != 0 && emptyBoard[4] == emptyBoard[0] && emptyBoard[8] == emptyBoard[0]) {
        console.log("Vitória Diagonal Principal")
        resetGame()
        return "Win"
    }
    
    else if (emptyBoard[2] != 0 && emptyBoard[4] == emptyBoard[2] && emptyBoard[6] == emptyBoard[2]) {
        console.log("Vitória Diagonal Secundária")
        resetGame()
        return "Win"
    }

    if (totalTurns == 9) {
        console.log("EMPATOU PORRAAAAA")
        resetGame()
        return "Draw"
    }

}

function messages(pick) {

   const crossTurn = () => messageDisplay.textContent = `It is Cross turn`
   const circleTurn = () => messageDisplay.textContent = `It is Circle turn`
   const draw = () => messageDisplay.textContent = `It is a Draw`

   const playerWin = () => messageDisplay.textContent = `It is a ${pick} victory`  
   
   return { crossTurn, circleTurn, playerWin, draw }
   
}

function resetGame() {
    emptyBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    playTime = "cross"
    totalTurns = 0
    allBoxes.forEach(element => element.textContent = "")
}

const playerOne = choice("cross");
const playerTwo = choice("circle");
