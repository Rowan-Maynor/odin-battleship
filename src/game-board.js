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

    switch (direction) {
      case "up":
        if (this.isValidLocation([location[0] - (length - 1), location[1]])) {
          while(length > 1){
            location = [location[0] - 1, location[1]];
            this.board[location[0]][location[1]] = newShip;
            length--;
          }
        } else {
          throw new Error("Invalid location");
        }
        break;
      case "right":
        if (this.isValidLocation([location[0], location[1] + (length - 1)])) {
          while(length > 1){
            location = [location[0], location[1] + 1];
            this.board[location[0]][location[1]] = newShip;
            length--;
          }
        } else {
          throw new Error("Invalid location");
        }
        break;
      case "down":
        if (this.isValidLocation([location[0] + (length - 1), location[1]])) {
          while(length > 1){
            location = [location[0] + 1, location[1]];
            this.board[location[0]][location[1]] = newShip;
            length--;
          }
        } else {
          throw new Error("Invalid location");
        }
        break;
      case "left":
        if (this.isValidLocation([location[0], location[1] - (length - 1)])) {
          while(length > 1){
            location = [location[0], location[1] -1];
            this.board[location[0]][location[1]] = newShip;
            length--;
          }
        } else {
          throw new Error("Invalid location");
        }
        break;
      default:
        throw new Error("Unsupported direction");
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