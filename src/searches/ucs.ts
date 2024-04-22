import { Grid } from "../models/grid";
import { PriorityQueue } from "./priorityqueue";
import {  getKey, getNeighbors, setTo2DArray } from "./utils";

export function ucs(grid: Grid, start: Array<number>, goal: Array<number>) {
  const pq = new PriorityQueue((a, b) => a.cost - b.cost);

  pq.enqueue({ path: [start], cost: 0 });
  const visited = new Set([getKey(start[0], start[1])]);

  while (!pq.isEmpty()) {
    const item = pq.dequeue();
    const path = item?.path
    const cost = item?.cost
    if (path == undefined || cost === undefined){
      console.log("rolou")
      break;
    }
    let [row, col] = path[path.length - 1];
    row = Math.floor(row);
    col = Math.floor(col);

    if (row === goal[0] && col === goal[1]) {
      return { path, visited: setTo2DArray(visited) };
    }

    for (const neighbor of getNeighbors(row, col, grid.gridMatrix)) {
      const neighborKey = getKey(neighbor[0], neighbor[1]);
      const newCost = cost + grid.gridMatrix[neighbor[0]][neighbor[1]].weight;

      if (!visited.has(neighborKey)) {
        visited.add(neighborKey);
        pq.enqueue({ path: [...path, neighbor], cost: newCost });
      }
    }
  }

  return { path: [[]], visited: setTo2DArray(visited) }// If goal is not found
}

