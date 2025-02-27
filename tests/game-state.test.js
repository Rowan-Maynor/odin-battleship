import { GameState } from "../src/game-state";

let gameState;

beforeEach(() => {
  gameState = new GameState
});

test("GameState properly initilizes", () => {
  expect(gameState.playerTurn).toEqual("Player 1");
  expect(gameState.setupPhase).toEqual(true);
});