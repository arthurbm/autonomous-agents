import P5 from "p5";
import { Cell } from "../models/grid";
import { GRID_HEIGHT, GRID_WIDTH } from "../utils/constants";

export function setTo2DArray(set: Set<string>) {
  // Convert the Set to an array and sort it by the first value
  const sortedArray = Array.from(set);

  // Split each string in the array into its two values
  const splitArray = sortedArray.map((str) => str.split(","));

  // Map each sub-array to an array of numbers
  const numArray = splitArray.map((arr) => arr.map(Number));

  return numArray;
}

export function getKey(row: number, col: number) {
  return `${row},${col}`;
}

export function getNeighbors(row: number, col: number, gridMatrix: Array<Array<Cell>>) {
  let neighbors = [];

  for (let [r, c] of [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]) {
    let neighborRow = row + r;
    let neighborCol = col + c;

    if (
      neighborRow >= 0 &&
      neighborRow < GRID_WIDTH &&
      neighborCol >= 0 &&
      neighborCol < GRID_HEIGHT &&
      Math.abs(r) + Math.abs(c) === 1
    ) {
      if (gridMatrix[neighborRow][neighborCol].weight !== Infinity) {
        let neighbor = [neighborRow, neighborCol];
        neighbors.push(neighbor);
      }
    }
  }

  return neighbors;
}

/*export function heuristic(node, goal) {
  // Use Manhattan distance as the heuristic export function
  return Math.abs(node[0] - goal[0]) + Math.abs(node[1] - goal[1]);
}*/

export function heuristic(node: Array<number>, goal: Array<number>) {
  let dx = Math.abs(node[0] - goal[0]);
  let dy = Math.abs(node[1] - goal[1]);
  return ((dx**2 + dy**2)**(0.5))*100000;
}

export function convert2DArrayToVector(path: Array<Array<number>> , p5: P5) {
  let vectorPath = [];
  for (let i = 0; i < path.length; i++) {
    vectorPath.push(p5.createVector(path[i][0], path[i][1]));
  }
  return vectorPath;
}
