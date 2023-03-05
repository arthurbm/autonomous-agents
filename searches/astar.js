function getCellWeight(row, col, gridMatrix) {
  return gridMatrix[row][col].weight;
}

function aStar(grid, start, goal) {
  let rows = GRID_WIDTH;
  let cols = GRID_HEIGHT;
  let pq = new PriorityQueue((a, b) => a.cost - b.cost);
  let startWeight = getCellWeight(start[0], start[1], grid.gridMatrix);
  pq.enqueue({ path: [start], cost: startWeight + heuristic(start, goal) }); // Use the heuristic function and the cost of the current path to estimate the cost to the goal
  let visited = new Set([getKey(start[0], start[1])]);

  while (!pq.isEmpty()) {
    let { path, cost } = pq.dequeue();
    let [row, col] = path[path.length - 1];
    row = Math.floor(row);
    col = Math.floor(col);

    if (row === goal[0] && col === goal[1]) {
      return {
        path: transformBfsToVector(path),
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
      let newCost =
        cost +
        1 -
        heuristic([row, col], goal) +
        neighborWeight +
        heuristic(neighbor, goal);

      if (!visited.has(neighborKey)) {
        visited.add(neighborKey);
        pq.enqueue({ path: [...path, neighbor], cost: newCost });
      }
    }
  }

  return null; // If goal is not found
}
