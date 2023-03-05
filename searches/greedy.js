function greedy(grid, start, goal) {
  let rows = GRID_WIDTH;
  let cols = GRID_HEIGHT;
  let pq = new PriorityQueue((a, b) => a.cost - b.cost);
  pq.enqueue({ path: [start], cost: heuristic(start, goal) }); // Use the heuristic function to estimate the cost to the goal
  let visited = new Set([getKey(start[0], start[1])]);

  while (!pq.isEmpty()) {
    let { path, cost } = pq.dequeue();
    let [row, col] = path[path.length - 1];
    row = Math.floor(row);
    col = Math.floor(col);

    if (row === goal[0] && col === goal[1]) {
      return { path: transformBfsToVector(path), visited: setTo2DArray(visited)};
    }

    for (let neighbor of getNeighbors(row, col, grid.gridMatrix)) {
      let neighborKey = getKey(neighbor[0], neighbor[1]);
      let newCost = heuristic(neighbor, goal); // Use the heuristic function to estimate the cost to the goal

      if (!visited.has(neighborKey)) {
        visited.add(neighborKey);
        pq.enqueue({ path: [...path, neighbor], cost: newCost });
      }
    }
  }

  return null; // If goal is not found
}

/*function heuristic(node, goal) {
  // Use Manhattan distance as the heuristic function
  return Math.abs(node[0] - goal[0]) + Math.abs(node[1] - goal[1]);
}*/

function heuristic(node, goal) {
  let dx = Math.abs(node[0] - goal[0]);
  let dy = Math.abs(node[1] - goal[1]);
  return dx + dy;
}
