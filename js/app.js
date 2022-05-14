/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let squares = []
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
board.addEventListener("click", handleClick)



/*-------------------------------- Functions --------------------------------*/

init();

function init() {  
  turn = 1
  isWinner = null
  squares = [
    null, null, null,
    null, null, null,
    null, null, null
  ]
  message.textContent = 'X goes first'
  // render()
}

function handleClick(evt) {
  const index = evt.target.id.replace('sq', '')
  console.log(index)
  if (isWinner) {
    return
  }
  if (squares[index] !== null) {
    return
  }
  squares[index] = turn
  turn *= -1
  console.log(turn)
  
  render()
  // getWinner
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