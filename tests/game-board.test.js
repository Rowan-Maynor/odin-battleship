import { Gameboard } from "../src/game-board.js";
import { Ship } from "../src/ship.js";

let gameBoard;

beforeEach(() => {
  gameBoard = new Gameboard();
});

test("Gameboard initializes correctly", () => {
  expect(gameBoard.board).toEqual([
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
  ]);
});

test("Adds new ships to array", () => {
  gameBoard.createShip(2, [0, 0], "right");
  expect(gameBoard.ships[0] instanceof Ship).toEqual(true);
});

test("Creates ships pointing up", () => {
  gameBoard.createShip(5, [5, 5], "up");
  expect(gameBoard.board[5][5]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[4][5]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[3][5]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[2][5]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[1][5]).toEqual(gameBoard.ships[0]);
});

test("Throws error if any upward cell is out of bounds", () => {
  expect(() => gameBoard.createShip(2, [0, 0], "up")).toThrow(
    "Invalid location",
  );
});

test("Creates ships pointing left", () => {
  gameBoard.createShip(5, [5, 5], "left");
  expect(gameBoard.board[5][5]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[5][4]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[5][3]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[5][2]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[5][1]).toEqual(gameBoard.ships[0]);
});

test("Throws error if any left cell is out of bounds", () => {
  expect(() => gameBoard.createShip(2, [0, 0], "left")).toThrow(
    "Invalid location",
  );
});

test("Creates ships pointing right", () => {
  gameBoard.createShip(5, [5, 5], "right");
  expect(gameBoard.board[5][5]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[5][6]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[5][7]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[5][8]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[5][9]).toEqual(gameBoard.ships[0]);
});

test("Throws error if any right cell is out of bounds", () => {
  expect(() => gameBoard.createShip(2, [9, 9], "right")).toThrow(
    "Invalid location",
  );
});

test("Creates ships pointing down", () => {
  gameBoard.createShip(5, [5, 5], "down");
  expect(gameBoard.board[5][5]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[6][5]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[7][5]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[8][5]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[9][5]).toEqual(gameBoard.ships[0]);
});

test("Throws error if any downward cell is out of bounds", () => {
  expect(() => gameBoard.createShip(2, [9, 9], "down")).toThrow(
    "Invalid location",
  );
});

test("Ships can recieve attacks", () => {
  gameBoard.createShip(5, [5, 5], "down");
  gameBoard.recieveAttack(gameBoard.ships[0]);
  expect(gameBoard.ships[0].hits).toEqual(1);
})
