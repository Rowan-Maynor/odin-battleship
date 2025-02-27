import { GameState } from "../src/game-state";

let gameState;

beforeEach(() => {
  gameState = new GameState
});

test("GameState properly initilizes", () => {
  expect(gameState.playerTurn).toEqual("Player 1");
  expect(gameState.setupPhase).toEqual(true);
});

test("GameState updates player turn", () => {
  gameState.changeTurn();
  expect(gameState.playerTurn).toEqual("Player 2");
  gameState.changeTurn();
  expect(gameState.playerTurn).toEqual("Player 1");
});