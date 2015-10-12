angular.module('TicTacToe').controller('TicTacToeController', TicTacToeController);

function TicTacToeController() {

this.playCount = 1;

this.play = play;

function play(click){
  // validation?
  if (this.playCount %2 === 0) {
    console.log('even click' + click)
    this.playCount++;

  } else {
    console.log('odd click' + click)
    this.playCount++;
  }
};

}