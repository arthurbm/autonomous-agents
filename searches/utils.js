function setTo2DArray(set) {
  // Convert the Set to an array and sort it by the first value
  const sortedArray = Array.from(set);

  // Split each string in the array into its two values
  const splitArray = sortedArray.map((str) => str.split(","));

  // Map each sub-array to an array of numbers
  const numArray = splitArray.map((arr) => arr.map(Number));

  return numArray;
}

function getKey(row, col) {
  return `${row},${col}`;
}

function getNeighbors(row, col, grid) {
  let neighbors = [];

  for (let [r, c] of [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]) {
    let neighborRow = row + r;
    let neighborCol = col + c;

    if (
      neighborRow >= 0 &&
      neighborRow < GRID_WIDTH &&
      neighborCol >= 0 &&
      neighborCol < GRID_HEIGHT &&
      Math.abs(r) + Math.abs(c) === 1
    ) {
      if (grid[neighborRow][neighborCol].weight !== Infinity) {
        let neighbor = [neighborRow, neighborCol];
        neighbors.push(neighbor);
      }
    }
  }

  return neighbors;
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

function convert2DArrayToVector(path) {
  let vectorPath = [];
  //console.log(path)
  for (let i = 0; i < path.length; i++) {
    vectorPath.push(createVector(path[i][0], path[i][1]));
  }
  //console.log(vectorPath)
  return vectorPath;
}
