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
// isWinner: a player that won (1 or -1), a tie (t), game is still in play
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
board.addEventListener("click", handleClick)



/*-------------------------------- Functions --------------------------------*/

init();

function init() {  
  
  isWinner = null
  boardArray = [
    null, null, null,
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

function handleClick(evt) {
  if (isWinner) {
    return
  }

  let idx = parseInt(evt.target.id.slice(-1))
  
  if (boardArray[idx]) {
    return
  } 

  boardArray[idx] = turn
  console.log(boardArray)
  

}

function render() {
  
  for (let i = 0; i < boardArray.length && squares; i++) {
    if (boardArray[i] === 1) {
      squares[i].textContent = 'X'

    } else if (boardArray[i] === -1) {
      squares[i].textContent = 'O'

    }
  }

  if (!isWinner) {
    turn *= -1
    turn === 1 ? message.textContent = `it is X's turn` : 
      message.textContent = `now it's O's turn`
    } else if (isWinner === 'T') {
      message.textContent = `How climactic! It's a tie!`
    } else if (isWinner) {
      isWinner === 1 ? message.textContent = `X Wins!` : 
      message.textContent = `O Wins!`
    } 
    
}