import P5 from "p5";
import { Grid } from "../models/grid";
import { PriorityQueue } from "./priorityqueue";
import {  getKey, getNeighbors, setTo2DArray } from "./utils";

export function ucs(grid: Grid, start: Array<number>, goal: Array<number>) {
  // let rows = GRID_WIDTH;
  // let cols = GRID_HEIGHT;
  let pq = new PriorityQueue((a, b) => a.cost - b.cost);

  pq.enqueue({ path: [start], cost: 0 });
  let visited = new Set([getKey(start[0], start[1])]);

  while (!pq.isEmpty()) {
    let { path, cost } = pq.dequeue();
    let [row, col] = path[path.length - 1];
    row = Math.floor(row);
    col = Math.floor(col);

    if (row === goal[0] && col === goal[1]) {
      return { path, visited: setTo2DArray(visited) };
    }

    for (let neighbor of getNeighbors(row, col, grid.gridMatrix)) {
      let neighborKey = getKey(neighbor[0], neighbor[1]);
      let newCost = cost + grid.gridMatrix[neighbor[0]][neighbor[1]].weight;

      if (!visited.has(neighborKey)) {
        visited.add(neighborKey);
        pq.enqueue({ path: [...path, neighbor], cost: newCost });
      }
    }
  }

  return null; // If goal is not found
}

