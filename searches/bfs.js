function bfs(grid, start, goal) {
  let queue = [[start]];
  let visited = new Set([getKey(start[0], start[1])]);

  while (queue.length > 0) {
    let path = queue.shift();
    let [row, col] = path[path.length - 1];
    row = Math.floor(row);
    col = Math.floor(col);

    if (row === goal[0] && col === goal[1]) {
      return {
        path: convert2DArrayToVector(path),
        visited: setTo2DArray(visited),
      };
    }

    for (let neighbor of getNeighbors(row, col, grid.gridMatrix)) {
      let neighborKey = getKey(neighbor[0], neighbor[1]);

      if (!visited.has(neighborKey)) {
        visited.add(neighborKey);
        queue.push([...path, neighbor]);
      }
    }
  }
  return null; // If goal is not found
}
