import { Gameboard } from "../src/game-board.js";
import { Ship } from "../src/ship.js";

let gameBoard;

beforeEach(() => {
  gameBoard = new Gameboard();
});

test("Gameboard initializes correctly", ()=> {
  expect(gameBoard.board).toEqual([
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
  ]);
});

test("Adds new ships to array", () => {
  gameBoard.createShip(2, [0, 0], "right");
  expect(gameBoard.ships[0] instanceof Ship).toEqual(true);
});

test("Throws error if initial placement is invalid", () => {
  expect(() => gameBoard.createShip(2, [11, 1], "right")).toThrow("Invalid location")
});

test("Creates ships pointing up", () => {
  gameBoard.createShip(2, [5, 5], "up");
  expect(gameBoard.board[5][5]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[4][5]).toEqual(gameboard.ships[0]);
});

test.skip("Creates ships pointing left", () => {
  gameBoard.createShip(2, [5, 5], "left");
  expect(gameBoard.board[5][5]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[5][4]).toEqual(gameboard.ships[0]);
});

test.skip("Creates ships pointing right", () => {
  gameBoard.createShip(2, [5, 5], "right");
  expect(gameBoard.board[5][5]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[5][6]).toEqual(gameboard.ships[0]);
});

test.skip("Creates ships pointing down", () => {
  gameBoard.createShip(2, [5, 5], "down");
  expect(gameBoard.board[5][5]).toEqual(gameBoard.ships[0]);
  expect(gameBoard.board[6][5]).toEqual(gameboard.ships[0]);
});