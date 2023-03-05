function dfs(grid, start, goal) {
  let stack = [[start]];
  let visited = new Set([getKey(start[0], start[1])]);

  while (stack.length > 0) {
    let path = stack.pop();
    let [row, col] = path[path.length - 1];
    row = Math.floor(row);
    col = Math.floor(col);

    if (row === goal[0] && col === goal[1]) {
      return {
        path: transformBfsToVector(path),
        visited: setTo2DArray(visited),
      };
    }

    for (const [neighborRow, neighborCol] of getNeighbors(row, col, grid.gridMatrix)) {
      const neighborKey = getKey(neighborRow, neighborCol);
    
      if (visited.has(neighborKey)) {
        continue;
      }
    
      visited.add(neighborKey);
      stack.push([...path, [neighborRow, neighborCol]]);
    }
    
  }

  return null; // If goal is not found
}
