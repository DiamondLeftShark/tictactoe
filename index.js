const prompt = require('prompt');

//initialize variables

const board = [['-','-','-'],
              ['-','-','-'],
              ['-','-','-']];

const options = [[1,2,3],
                 [4,5,6],
                 [7,8,9]];

let xTurn = true;
let winner = undefined;

prompt.start();



while(winner === undefined) {
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
  let activePlayer = xTurn === true ? 'X' : 'O';
  console.log(`It is player ${activePlayer}'s turn.`)
  console.log(options[0]);
  console.log(options[1]);
  console.log(options[2]);

  winner = 1;
}