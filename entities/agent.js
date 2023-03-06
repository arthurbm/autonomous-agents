let agentSpeed = 0.25;
let vectorVel = [];
class Agent {
  constructor(x, y, grid, world) {
    this.linha = x;
    this.coluna = y;
    this.currentPosition = createVector(x, y);
    this.targetPosition = [];
    this.currentTargetIndex = 0;
    this.grid = grid;
  }

  /*move() {
    if (this.targetPosition === null || this.targetPosition.length === 0) {
      return;
    }
    let currentTarget = this.targetPosition[this.currentTargetIndex];
    
    if (this.currentPosition.dist(currentTarget) > 0.1) {
      this.currentPosition.lerp(currentTarget, 0.05);

      let { x, y } = this.currentPosition;
      let pixelSize = GRID_SIZE;
      fill("#ff0");
      rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    } else {
      this.currentTargetIndex++;
      if (this.currentTargetIndex >= this.targetPosition.length) {
        this.targetPosition = [];
        this.currentTargetIndex = 0;
      }
    }
  }
  
  */

  move(grid) {
    if (this.targetPosition === null || this.targetPosition.length === 0) {
      return;
    }

    const currentTarget = this.targetPosition[this.currentTargetIndex];

    const direction = p5.Vector.sub(currentTarget, this.currentPosition);
    direction.normalize();
    vectorVel.push(agentSpeed);
    if (this.currentTargetIndex + 1 < this.targetPosition.length) {
      switch (
        grid.gridMatrix[this.targetPosition[this.currentTargetIndex].x][
          this.targetPosition[this.currentTargetIndex].y
        ].title
      ) {
        case "vazio":
          agentSpeed = 0.25;
          break;

        case "grass":
          agentSpeed = 0.05;
          break;

        case "water":
          agentSpeed = 0.01;
          break;
      }
      vectorVel.push(agentSpeed);
    }
    //speed = 0.05;
    let s = vectorVel.pop();
    //print(s)
    // adjust speed to change the speed of the agent
    const velocity = p5.Vector.mult(direction, s);

    this.currentPosition.add(velocity);

    if (p5.Vector.dist(this.currentPosition, currentTarget) < agentSpeed) {
      this.currentTargetIndex++;

      if (this.currentTargetIndex >= this.targetPosition.length) {
        this.targetPosition = [];
        this.currentTargetIndex = 0;
      }
    }

    const { x, y } = this.currentPosition;
    fill("red");
    //rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    // rect(x * GRID_SIZE, y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
    image(trainerImg, x * GRID_SIZE, y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
  }

  getAdjacentPositions() {
    const { x, y } = this.currentPosition;
    const possiblePositions = [
      { x: x + 1, y: y },
      { x: x - 1, y: y },
      { x: x, y: y + 1 },
      { x: x, y: y - 1 },
    ];

    return possiblePositions.filter((pos) => {
      const gridValue =
        this.grid.gridMatrix[pos.x] && this.grid.gridMatrix[pos.x][pos.y];
      return gridValue && gridValue.weight !== Infinity;
    });
  }

  calculateAgentPosition(agentPos, cellSize) {
    return {
      x: agentPos.i * cellSize + cellSize / 2,
      y: agentPos.j * cellSize + cellSize / 2,
    };
  }

  getPosMatrix() {
    return [this.linha, this.coluna];
  }

  addVisited(grid) {
    let i = Math.floor(this.pos.x / grid.cellSize);
    let j = Math.floor(this.pos.y / grid.cellSize);
    this.visited.push(createVector(i, j));
    grid.grid[i][j].checked = true;
  }
}
