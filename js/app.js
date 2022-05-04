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

// 3.2) That initialize function should initialize the state variables:
  // see 3.2.1) - 3.2.4) 

function init() {
  console.log('init')
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

// 3.3) The render function should
	  // 3.3.1) Loop over the board array (which represents the squares on the page), and FOR EACH iteration:
		  // 3.3.1.1) Use the INDEX of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array
		  // 3.3.1.2) Style that square however you wish dependant on the value contained in the current cell being iterated over (-1, 1, or null)
	  // 3.3.2) Render a message reflecting the currrent game state:
	    // 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
	      // Hint: Maybe use a ternary inside of a template literal here?
	    // 3.3.2.2) If winner is equal to 'T' (tie), render a tie message.
	    // 3.3.2.3) Otherwise, render a congratulatory message to which player has won.
	      // Hint (again): Maybe use a ternary inside a template literal here

function render() {
  squares.forEach(function(square, idx) {
    if (square === 1) {
      square[idx].textContent = 'X'
    }
  })
}