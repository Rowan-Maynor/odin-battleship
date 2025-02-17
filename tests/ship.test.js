import { Ship } from "../src/ship";

let ship;

beforeEach(() => {
  ship = new Ship(4);
});

test("Ship initializes correctly", ()=>{
  expect(ship.length).toBeGreaterThan(0);
  expect(ship.hits).toBe(0);
  expect(ship.isSunk).toBe(false);
});

test("Ship registers hits", () => {
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("Ship handles being sunk", () =>{
  ship.hits = ship.length - 1;
  ship.hit();
  expect(ship.isSunk).toBe(true);
});