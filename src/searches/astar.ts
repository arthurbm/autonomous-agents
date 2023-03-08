import { Cell, Grid } from "../models/grid";
import { PriorityQueue } from "./priorityqueue";
import { getKey, getNeighbors, heuristic, setTo2DArray } from "./utils";

function getCellWeight(row: number, col: number, gridMatrix: Array<Array<Cell>>) {
  return gridMatrix[row][col].weight;
}

export function aStar(grid: Grid, start: Array<number>, goal: Array<number>) {
  // let rows = GRID_WIDTH;
  // let cols = GRID_HEIGHT;
  let pq = new PriorityQueue((a, b) => a.cost - b.cost);
  let startWeight = getCellWeight(start[0], start[1], grid.gridMatrix);
  pq.enqueue({ path: [start], costFromStart:0, cost: startWeight + heuristic(start, goal) }); // Use the heuristic function and the cost of the current path to estimate the cost to the goal
  let visited = new Set([getKey(start[0], start[1])]);

  while (!pq.isEmpty()) {
    let item = pq.dequeue();
    let path = item?.path
    let costFromStart = item?.costFromStart
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

    for (let neighbor of getNeighbors(row, col, grid.gridMatrix)) {
      let neighborKey = getKey(neighbor[0], neighbor[1]);
      let neighborWeight = getCellWeight(
        neighbor[0],
        neighbor[1],
        grid.gridMatrix
      );
      let newCostFromStart = costFromStart + neighborWeight
      let newCost = newCostFromStart + heuristic(neighbor,goal)
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
