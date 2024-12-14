console.log("Welcome to Tic Tac Toe by Adx")
let played = new Audio("played.wav");
let play = new Audio("play.wav");
let complete = new Audio("complete.wav");
let boxes = document.getElementsByClassName("box");
let playerTurn = document.getElementsByClassName("info")
let image = document.getElementById("gif");
let reset = document.getElementById("reset");
let gameover = false;
let turn = "X";
const stopGame = () => {
    gameOver = true; // Set gameOver to true
    // Optionally, you can disable the boxes or add any other logic here
    Array.from(boxes).forEach((Element) => {
        Element.style.pointerEvents = 'none'; // Disable further clicks on the boxes
    });
}
reset.addEventListener("click",()=>{
    Array.from(boxes).forEach((Element) => {
        Element.textContent = "";
        Element.style.pointerEvents = 'auto'; 
        image.style.opacity=0;
    })
})
const cturn = (turn) => {
    return turn === "X" ? "0" : "X";
}
const checkwin = () => {
    let box = document.getElementsByClassName("box");
    let possibilities = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]; for (let i = 0; i < possibilities.length; i++) {
        let a = possibilities[i][0];
        let b = possibilities[i][1];
        let c = possibilities[i][2];
        if ((box[a].innerText === box[b].innerText) && (box[b].innerText === box[c].innerText) && (box[a].innerText !== "")) {
            playerTurn[0].innerText = box[a].innerText + " wins!";
            complete.play();
            image.style.opacity=1;
            gameover = true;
            stopGame();
        }
    }


}
Array.from(boxes).forEach((Element) => {
    // let box = Element.querySelector(".gametext")
    Element.addEventListener('click', () => {
        if (Element.textContent === "") {
            Element.textContent = turn;
            played.play();
            played.currentTime = 0;
            checkwin();
            if (!gameover) {
                turn = cturn(turn);
                playerTurn[0].innerText = "Turn For " + turn;
            }
            

        }
    })
})