angular.module('TicTacToe').controller('TicTacToeController', TicTacToeController);

function TicTacToeController() {

this.winningMove = [ 
                   [0,1,2],
                   [3,4,5],
                   [6,7,8],         // horizontals (& map)
           [0,3,6],[1,4,7],[2,5,8], // verticals
           [0,4,8],[2,4,6]          // diagonals
];

this.newBoard = [
                ['','',''],
                ['','',''],
                ['','','']
];
this.winCount = 0;
this.OMoves = [];
this.XMoves = [];

this.playCount = 1;

this.play = play;

function play(click){
  var currentPlayer = ''
  if (this.playCount %2 === 0) {
    console.log('even click' + click)
    this.playCount++;
    this.OMoves.push(click)

  } else {
    console.log('odd click' + click)
    this.playCount++;
  }
};

}