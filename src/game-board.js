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

    if(this.isValidLocation(location)){
      this.board[location[0]][location[1]] = newShip;
    } else {
      throw new Error("Invalid location");
    }
  }

  isValidLocation(location) {
    if(this.board[location[0]] == undefined){
      return false;
    } else if (this.board[location[0]][location[1]] == undefined) {
      return false;
    }
    return true;
  }
}