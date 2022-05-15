const winningCombos = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8],
	[0, 3, 6], [1, 4, 7], [2, 5, 8],
	[0, 4, 8], [2, 4, 6]
]

let squares = []
let boardArray, turn, clicks, isWinner

const title = document.querySelector('#title')
const message = document.querySelector('#message')
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

const resetBtn = document.getElementById('reset-button')
// resetBtn.addEventListener('click', )

board.addEventListener("click", handleClick)

init();

function init() {  
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
  isWinner = null
  turn = 1
  clicks = 0
  console.log (clicks)
  message.textContent = 'x goes first'
  
}

function handleClick(evt) {
  let idx = parseInt(evt.target.id.slice(-1)) 
  if (isWinner) {
    return
  }
  if (boardArray[idx]) {
    return
  } 
  boardArray[idx] = turn
  turn *= -1
  clicks++
  console.log(clicks)

  render()
  getWinner()
  
  
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
    turn === 1 ? message.textContent = `it is X's turn` : message.textContent = `now it's O's turn`
  }    
}

function getWinner() {
  
  if (clicks < 9) {
    winningCombos.forEach(function(winningCombo) {  
      if (boardArray[winningCombo[0]] + boardArray[winningCombo[1]] + boardArray[winningCombo[2]] === 3) {
        isWinner = 1
        message.textContent = 'X WINS!'
      } else 
      if (boardArray[winningCombo[0]] + boardArray[winningCombo[1]] + boardArray[winningCombo[2]] === -3) {
        isWinner = -1
        message.textContent = '0 WINS!'
      } 
    })
  } else {
    message.textContent = 'oh, a tie'
  }

} 




// let timeLeft = 2
// setInterval(function() {
//   // this way
//   timeLeft -= 1
//   if (timeLeft < 0) {
//   // now this way
//   }  
// }, 1000)


