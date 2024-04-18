import { Grid } from "../models/grid";
import { getKey, getNeighbors, setTo2DArray } from "./utils";

export function bfs(grid: Grid, start: Array<number>, goal: Array<number>) {
  const queue = [[start]];
  const visited = new Set([getKey(start[0], start[1])]);

  try {
    while (queue.length > 0) {
      const path = queue.shift();
      if (path === undefined) {
        throw new Error("Path is undefined");
      }
      let [row, col] = path[path.length - 1];
      row = Math.floor(row);
      col = Math.floor(col);

      if (row === goal[0] && col === goal[1]) {
        return {
          path,
          visited: setTo2DArray(visited),
        };
      }

      for (const neighbor of getNeighbors(row, col, grid.gridMatrix)) {
        const neighborKey = getKey(neighbor[0], neighbor[1]);

        if (!visited.has(neighborKey)) {
          visited.add(neighborKey);
          queue.push([...path, neighbor]);
        }
      }
    }
    return { path: [[]], visited: setTo2DArray(visited) }// If goal is not found
  } catch (e) {
    throw new Error("goal not found");
  }
}
