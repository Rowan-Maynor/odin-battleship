import { Gameboard } from "../src/game-board";

let gameBoard;

beforeEach(() => {
  gameBoard = new Gameboard();
});

test("Gameboard initializes correctly", ()=> {
  expect(gameBoard.board).toBe([
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ]);
});

test("Creates ships pointing up", () => {
  gameBoard.createShip(2, [5][5], up);
  expect(gameBoard.board[5][5]).toBe(gameBoard.ships[0]);
  expect(gameBoard.board[4][5]).toBe(gameboard.ships[0]);
});

test("Creates ships pointing left", () => {
  gameBoard.createShip(2, [5][5], left);
  expect(gameBoard.board[5][5]).toBe(gameBoard.ships[0]);
  expect(gameBoard.board[5][4]).toBe(gameboard.ships[0]);
});

test("Creates ships pointing right", () => {
  gameBoard.createShip(2, [5][5], right);
  expect(gameBoard.board[5][5]).toBe(gameBoard.ships[0]);
  expect(gameBoard.board[5][6]).toBe(gameboard.ships[0]);
});

test("Creates ships pointing down", () => {
  gameBoard.createShip(2, [5][5], down);
  expect(gameBoard.board[5][5]).toBe(gameBoard.ships[0]);
  expect(gameBoard.board[6][5]).toBe(gameboard.ships[0]);
});