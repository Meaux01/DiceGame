//================ Task 1 ==============================
// Create a function (rollDice)
// console.log(playerDice)
// console.log(computerDice)
let playerDice;
let computerDice;
let winner;
const array = [];

const rollDice = () => {
  playerDice = Math.ceil(Math.random() * 6);
  computerDice = Math.ceil(Math.random() * 6);
  console.log(playerDice);
  console.log(computerDice);
  winner =
    playerDice > computerDice
      ? "Player Wins!"
      : playerDice === computerDice
      ? "Tie Game!"
      : "Computer Wins!";
  array.push(playerDice);
  array.push(computerDice);
  array.push(winner);
  console.log(array);
  return array;
};
// console.dir(rollDice)

// Roll Two "dice" one for the player and one for the computer
// Use one variables for the (player) and one for the (computer)
// (use a random number from 1-6 to represent a dice)

// If the player's dice roll is higher than the computer dice roll,

// console.log("PLAYER WINS")
// otherwise, log ("COMPUTER WINS")
// Use a ternary to check for the winner
// ----- After testing it, remove the console.log()
// leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
// FINALLY: return all three variables using an array
// return [VALUE1, VALUE2, VALUE3]

// ============ Task 2 ==============================
// Let's update our UI (User Interface)
// Create a function (displayScore)
// Create a new a div displaying:
// Computer Score: , Player Score:  & the Winner:
// so there is a running record of game data.
// Append the new div to the parent div on the HTML.
const winners = document.createElement("div");
winners.className = "winners";
const displayScore = () => {
  document.querySelector("body").append(winners);
  console.dir(winners);
  const displayingScore = document.createElement("div");
  document.querySelector(".winners").appendChild(displayingScore);
  displayingScore.textContent = `Player Score ${playerDice} |  Computer Score ${computerDice} | Winner ${winner}`;
};
const playGame = () => {
  rollDice();
  displayScore();
};
const play = document.querySelector("#play-game");
play.addEventListener("click", playGame);

// Create a Reset Function (resetGame)
// REMOVE the div with the game score, leaving just the parent div
// creating a clean slate for a new set of games :)
function resetGame() {
  document.querySelector(".winners").remove();
}
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetGame);
// ==== Final Step =====================

// Create a new function (playGame):
// Call the rollDice and the displayScore function inside this function

// ========= Don't forget to add your events listeners
// Attach the (playGame) function to the play game button
// Attach the (resetGame) function to the reset button

// ===== Now let's host this game in GITHUB PAGES and style it !!!
