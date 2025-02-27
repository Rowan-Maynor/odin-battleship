export class GameState {
  constructor(){
    this.playerTurn = "Player 1";
    this.setupPhase = true;
  }

  changeTurn(){
    if(this.playerTurn == "Player 1"){
      this.playerTurn = "Player 2";
    } else {
      this.playerTurn = "Player 1";
    }
  }

  startGame(){
    this.setupPhase = false;
  }

  resetGame(){
    this.playerTurn = "Player 1";
    this.setupPhase = true;
  }
}