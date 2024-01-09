let playerText = document.getElementsByClassName("player-text")[0];
let restartButton = document.getElementsByClassName("restart")[0];
let boxes = Array.from(document.getElementsByClassName("boxes"));

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

let X_Text = "X";
let O_Text = "O";

let currentPlayer = "X";
let spaces = Array(9).fill(null);

//Start Game 
const startGame = () => {
  boxes.forEach(box => box.addEventListener('click', clickedBox));

}
//ClickedBox 
function clickedBox(e) {
  let id = e.target.id

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;


    if (playerHasWon() !== false) {
      playerText.textContent = `${currentPlayer} has won!`
      
      let winningBlocks = playerHasWon();
      winningBlocks.map(box => boxes[box].style.backgroundColor = 'rgb(106, 91, 91)')

    }
    currentPlayer = currentPlayer == X_Text ? O_Text : X_Text
  }
}


restartButton.addEventListener('click', restart)

function restart() {
  spaces.fill(null)
  
  boxes.forEach(box => {
    box.innerHTML = ''
    box.style.backgroundColor = '';
  })
  currentPlayer = X_Text
  playerText.textContent = 'TIC TAC TOE';
  }

  const winningCombos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
  ];
  function playerHasWon (){
   for(const condition of winningCombos) {
    let [a,b,c] = condition;

    if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
      return[a,b,c];
    }
   }
   return false;
    }



startGame();
