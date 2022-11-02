//TIC TAC TOE ref youtube 'Coding with Russ' BEACHCOMBING PAGE
//Create array to hold board data
let boardData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]
//Define game variables
let player = 1;
let gameOver = false;

//Pull in cells from DOM
const cellElements = document.querySelectorAll(".cell");
//Pull in result text from DOM
const resultElement = document.getElementById("result");

//add event listener
cellElements.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    placeMarker(index)
  });
});

//Create function for placing markers
function placeMarker(index) {
  //detemine row and column from index
  let col = index % 3
  //console.log(col);
  let row = (index - col) / 3
  //Check if current cell is empty... and later on add in gameOver so the game actually stops once there is a winner or a tie.
    if(boardData [row][col] ==0 && gameOver == false) {
    boardData [row][col] = player;
    //change player
    player *= -1;
    //console.log(boardData);
    //Update the screen with Markers by invoking a function
    drawMarkers();
    //Check if there is a winner by invoking a function
    checkResult ();
  }} 

// Create function for drawing player markers
function drawMarkers() {
  //Iterate over rows with for loops
  for(let row = 0; row < 3; row++) {
  //Iterate over columns with for loop
    for(let col = 0; col < 3; col++){
    //check if player 1's marker
    if(boardData[row][col] == 1){
    //update cell class to add a cross
    cellElements[(row * 3) + col].classList.add("cross");
    } else if (boardData[row][col] == -1) {
      //update cell class to add circle
    cellElements[(row * 3) + col].classList.add("circle");
    }}}}
//Create function for checking the result of the game -  using maths. Player 1 wins on the board when 3 cells in any direction add up to 3. Likewise, player 2 will add up to -3. (needs to have a return after each endGame condition is met so that there is only one winner or a tie)
function checkResult() {
  //check rows and columns for winner using a for loop
  for(let a = 0; a < 3; a++) {
    let rowSum = boardData[a][0] + boardData[a][1] + boardData[a][2];
    let colSum = boardData[0][a] + boardData[1][a] + boardData[2][a];
    if(rowSum == 3 || colSum == 3) {
      //Player 1 wins
      endGame("White Clam shell");
      return
    } else if(rowSum == -3 || colSum == -3) {
      //Player 2 wins
      endGame("Blue Mussell shell");
      return
    }
  }
//Check diagonals for winner 
let diagonalSum1 = boardData[0][0] + boardData[1][1] + boardData[2][2];
let diagonalSum2 = boardData[0][2] + boardData[1][1] + boardData[2][0];
if(diagonalSum1 == 3 || diagonalSum2 == 3) {
  //Player 1 wins
  //console.log("Clam shell player wins"); debug complete so now add endGame and a return.
  endGame("White Clam shell");
  return
} else if(diagonalSum1 == -3 || diagonalSum2 == -3) {
  //Player 2 wins
  //console.log("Blue Mussell shell player wins");
  endGame("Blue Mussell shell");
  return
}
//Check for a tie 
if(boardData[0].indexOf(0) == -1 &&
  boardData[1].indexOf(0) == -1 &&
  boardData[2].indexOf(0) == -1) {
    //console.log("Tied game");
    endGame(0);
    return
  }
}
//Function to end the game and display the result
function endGame(winner) {
  //Trigger game over
  gameOver = true; 
  //Check if game ended in a tie
  if (winner == 0) {
    console.log("Tied game"); 
    //...now add to screen for player interaction
    resultElement.innerText = "It's a tie!"
  } else {
    console.log(`${winner} player wins!`);
    resultElement.innerText = `${winner} player wins!`
  }
}
//Restart game
const restartButton = document.getElementById("restart");
//Add event listener to restart button
restartButton.addEventListener("click", () => { 
 //reset game variables
 boardData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]
player = 1;
gameOver = false;
//reset game board
cellElements.forEach(cell => {
  cell.classList.remove("cross", "circle");
});
//Reset result text
resultElement.innerText = ""
});

// Using slightly different variables from Assignment 3 as shell-btn on index page is now a link and any color changes won't be observed unless the user returns to that page. 

const restartBtn = document.getElementById("restart");


function colorChangeBtn() {  
restartBtn.style.color = "plum"; 
}
colorChangeBtn();
 


//Function for Index page Select your favourite shell

const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setShell);

function setShell() {
  const choice = select.value;

  if (choice === 'cowry') {
    para.textContent = 'Often used in ancient times as currency! Cowry shells stay shiny due to the animal covering the outside of the shell with part of its body during its life';
  } else if (choice === 'trochus') {
    para.textContent = 'A spiralling shell of a marine snail that rises to a conical point. Trochus have been a mainstay of fashion for decades - the "mother of pearl" finish used for buttons and jewellery.';
  } else if (choice === 'clam') {
    para.textContent = 'The northern waters of Western Australia are home to five of the seven known giant clam species. Maxing out at 260 kgs the largest variety is equally remarkable due to the vivid blue colouring of the living animal.';
  } else if (choice === 'turban') {
    para.textContent = 'Often referred to as "periwinkles", this spiral shelled marine snail is unusual because it keeps itself safe with a hard shell door called the operculum.Turban shell operculum are round, flat with a spiral from the centre and are often called "cats eyes".';
  } else {
    para.textContent = '';
  }
}
