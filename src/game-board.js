import { Ship } from "./ship.js";

export class Gameboard {
  constructor() {
    this.board = [
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ];
    this.ships = [];
  }

  createShip(length, location, direction) {
    let newShip = new Ship(length);
    this.ships.push(newShip);

    this.board[location[0]][location[1]] = newShip;
  }

  isValidLocation(location) {
    if(this.board[location[0]][location[1]]){
      return true;
    } else {
      return false;
    }
  }
}