import { Ship } from "./ship.js";

export class Gameboard {
  constructor() {
    this.board = [
      [
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ],
      [
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ],
      [
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ],
      [
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ],
      [
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ],
      [
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ],
      [
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ],
      [
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ],
      [
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ],
      [
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ],
    ];
    this.ships = [];
  }

  createShip(length, location, direction) {
    let newShip = new Ship(length);
    this.ships.push(newShip);

    switch (direction) {
      case "up":
        if (this.isValidLocation([location[0] - (length - 1), location[1]])) {
          while (length > 0) {
            this.board[location[0]][location[1]] = newShip;
            location = [location[0] - 1, location[1]];
            length--;
          }
        } else {
          throw new Error("Invalid location");
        }
        break;
      case "right":
        if (this.isValidLocation([location[0], location[1] + (length - 1)])) {
          while (length > 0) {
            this.board[location[0]][location[1]] = newShip;
            location = [location[0], location[1] + 1];
            length--;
          }
        } else {
          throw new Error("Invalid location");
        }
        break;
      case "down":
        if (this.isValidLocation([location[0] + (length - 1), location[1]])) {
          while (length > 0) {
            this.board[location[0]][location[1]] = newShip;
            location = [location[0] + 1, location[1]];
            length--;
          }
        } else {
          throw new Error("Invalid location");
        }
        break;
      case "left":
        if (this.isValidLocation([location[0], location[1] - (length - 1)])) {
          while (length > 0) {
            this.board[location[0]][location[1]] = newShip;
            location = [location[0], location[1] - 1];
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

  receiveAttack(x, y){
    if(this.board[x][y] == "hit" || this.board[x][y] == "miss"){
      throw new Error("Location already attacked");
    } else if (this.board[x][y] == "empty"){
      this.board[x][y] = "miss";
    } else {
      this.board[x][y].hits++;
      this.board[x][y] = "hit";
    }
  }

  isSunkCheck(){
    for(const ship of this.ships){
      if(ship.isSunk == false){
        return false;
      }
    }
    return true;
  }

  isValidLocation(location) {
    if (this.board[location[0]] == undefined) {
      return false;
    } else if (this.board[location[0]][location[1]] == undefined) {
      return false;
    }
    return true;
  }
}
