function ucs(grid, start, goal) {
  let rows = GRID_WIDTH;
  let cols = GRID_HEIGHT;
  let pq = new PriorityQueue((a, b) => a.cost - b.cost);
  pq.enqueue({ path: [start], cost: 0 });
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
      let newCost = cost + grid.gridMatrix[neighbor[0]][neighbor[1]].weight;

      if (!visited.has(neighborKey)) {
        visited.add(neighborKey);
        pq.enqueue({ path: [...path, neighbor], cost: newCost });
      }
    }
  }

  return null; // If goal is not found
}

function setTo2DArray(set) {
  // Convert the Set to an array and sort it by the first value
  const sortedArray = Array.from(set);

  // Split each string in the array into its two values
  const splitArray = sortedArray.map(str => str.split(','));

  // Map each sub-array to an array of numbers
  const numArray = splitArray.map(arr => arr.map(Number));

  return numArray;
}
