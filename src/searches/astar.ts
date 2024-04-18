import { Cell, Grid } from "../models/grid";
import { PriorityQueue } from "./priorityqueue";
import { getKey, getNeighbors, heuristicAStar, setTo2DArray } from "./utils";

function getCellWeight(row: number, col: number, gridMatrix: Array<Array<Cell>>) {
  return gridMatrix[row][col].weight;
}

export function aStar(grid: Grid, start: Array<number>, goal: Array<number>) {
  // let rows = GRID_WIDTH;
  // let cols = GRID_HEIGHT;
  const pq = new PriorityQueue((a, b) => a.cost - b.cost);
  const startWeight = getCellWeight(start[0], start[1], grid.gridMatrix);
  pq.enqueue({ path: [start], costFromStart:0, cost: startWeight + heuristicAStar(start, goal) }); // Use the heuristic function and the cost of the current path to estimate the cost to the goal
  const visited = new Set([getKey(start[0], start[1])]);

  while (!pq.isEmpty()) {
    const item = pq.dequeue();
    const path = item?.path
    const costFromStart = item?.costFromStart
    if (path == undefined || costFromStart === undefined){
      console.log("rolou")
      break;
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
      const neighborWeight = getCellWeight(
        neighbor[0],
        neighbor[1],
        grid.gridMatrix
      );
      const newCostFromStart = costFromStart + neighborWeight
      const newCost = newCostFromStart + heuristicAStar(neighbor,goal)
        //heuristic([start],[row,col])
        // heuristic([row, col], goal) +
        //neighborWeight +
        //heuristic(neighbor, goal);

      if (!visited.has(neighborKey)) {
        visited.add(neighborKey);
        pq.enqueue({ path: [...path, neighbor],costFromStart: newCostFromStart ,cost: newCost });
      }
    }
  }

  return { path: [[]], visited: setTo2DArray(visited) }// If goal is not found
}
