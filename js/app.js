/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/
let squares = []
let boardArray
let turn
// isWinner: a player that won, a tie, game is still in play
let isWinner

/*------------------------ Cached Element References ------------------------*/
const board = document.querySelector('.board')
const sq0 = document.querySelector('#sq0')
const sq1 = document.querySelector('#sq1')
const sq2 = document.querySelector('#sq2')
const sq3 = document.querySelector('#sq3')
const sq4 = document.querySelector('#sq4')
const sq5 = document.querySelector('#sq5')
const sq6 = document.querySelector('#sq6')
const sq7 = document.querySelector('#sq7')
const sq8 = document.querySelector('#sq8')
const message = document.querySelector('#message')


/*----------------------------- Event Listeners -----------------------------*/
// board.addEventListener("click", handleClick)



/*-------------------------------- Functions --------------------------------*/

init();

function init() {  
  
  isWinner = null
  boardArray = [
    1, null, null,
    null, null, null,
    null, null, null
  ]
  squares = [
    sq0, sq1, sq2,
    sq3, sq4, sq5,
    sq6, sq7, sq8
  ]
  turn = 1
  message.textContent = 'X goes first'
  render()
}

function render() {
  for (let i = 0; i < boardArray.length && squares; i++) {
    if (boardArray[i] === 1) {
      squares[i].textContent = 'X'
    } else if (boardArray[i] === -1) {
      squares[i].textContent = 'O'
    }
  }
  turn *= -1

  if (turn === 1) {
    message.textContent = `it is X's turn`
  } else if (turn === -1) {
    message.textContent = `it is O's turn`
  }
}


/*
The render function should:
  
  Loop over the board array, for each i:
    - use the idx [i] to access the squares array that corresspond with the current cell being iterated over in the board array
    - style the square dependant on the value contained in the current cell being iterated over (1, -1, or null)

  Render a message reflecting the current game state:
    - whose turn is it, or a winner (ternary inside a template literal)

- After completing this step, you should be able to manually change the values held in the board array in the init function and see the corresponding style change


*/