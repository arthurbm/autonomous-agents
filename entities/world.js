class World {
  constructor() {
    this.startWorld();
  }

  run() {
    this.grid.drawGrid();

    if (this.visited.length === 0) {
      this.drawPath();
      this.agent.move(this.grid);
    } else {
      this.drawSearch();
    }

    //print(this.agent.currentPosition.dist(this.food.currentPosition))
    if (this.agent.currentPosition.dist(this.food.currentPosition) < 0.1) {
      this.startWorld();
    }
  }

  startWorld() {
    this.grid = new Grid(GRID_WIDTH, GRID_HEIGHT, GRID_SIZE);
    this.grid.addObstaculos(200, 100, 100);
    const { foodX, foodY } = this.grid.addFood();
    const { agentX, agentY } = this.grid.addAgent();
    this.food = new Food(foodX, foodY);
    this.agent = new Agent(agentX, agentY, this.grid);
    this.draw = [];
    this.visitedToDraw = [];

    // this.setBFSPath();
    // this.setUCSPath();
    // this.setGreedyPath();
    this.setDFSPath();
    // this.setAStarPath();
  }

  updatePathVisitedTargetPosition(path, visited) {
    this.path = path;
    this.visited = visited;
    this.agent.targetPosition = this.path;
  }

  setBFSPath() {
    let { path, visited } = bfs(
      this.grid,
      this.agent.getPosMatrix(),
      this.food.getPosMatrix()
    );
    this.updatePathVisitedTargetPosition(path, visited);
  }

  setUCSPath() {
    let { path, visited } = ucs(
      this.grid,
      this.agent.getPosMatrix(),
      this.food.getPosMatrix()
    );
    this.updatePathVisitedTargetPosition(path, visited);
  }

  setGreedyPath() {
    let { path, visited } = greedy(
      this.grid,
      this.agent.getPosMatrix(),
      this.food.getPosMatrix()
    );
    //console.log('path', path);
    this.updatePathVisitedTargetPosition(path, visited);
  }

  setDFSPath() {
    let { path, visited } = dfs(
      this.grid,
      this.agent.getPosMatrix(),
      this.food.getPosMatrix()
    );
    this.updatePathVisitedTargetPosition(path, visited);
  }

  setAStarPath() {
    let { path, visited } = aStar(
      this.grid,
      this.agent.getPosMatrix(),
      this.food.getPosMatrix()
    );
    this.updatePathVisitedTargetPosition(path, visited);
  }

  drawPath() {
    const pathColor = color(230, 230, 25);
    fill(pathColor);
    for (let i = 0; i < this.path.length - 1; i++) {
      const x = this.path[i].x * GRID_SIZE;
      const y = this.path[i].y * GRID_SIZE;
      circle(x + GRID_SIZE / 2, y + GRID_SIZE / 2, GRID_SIZE / 3);
    }
  }

  drawSearch() {
    const pathColor = color(255, 255, 255);

    let visitedAux = this.visited.shift();

    this.visitedToDraw.push(visitedAux);

    fill(pathColor);

    this.visitedToDraw.forEach((cell) => {
      const i = (cell[0] + 0.5) * GRID_SIZE;
      const j = (cell[1] + 0.5) * GRID_SIZE;
      console.log(i, j);
      circle(i, j, GRID_SIZE / 2);
    });

    console.log("visited length", this.visited.length);
  }

  // async drawSearch() {
  //   let visitedAux;
  //   let i = 0;
  //   let j = 0;
  //   const pathColor = color(255, 255, 255);
  //   const visitedInitialLength = this.visited.length;

  //   let visitedToDraw = [];

  //   for (let x = 0; x < visitedInitialLength; x++) {
  //     fill(pathColor);
  //     visitedAux = this.visited.shift();
  //     console.log(this.visited.length);

  //     i = visitedAux[0];
  //     j = visitedAux[1];
  //     visitedToDraw.push([i, j]);

  //     visitedToDraw.forEach((cell) => {
  //       const x = cell[0] * GRID_SIZE;
  //       const y = cell[1] * GRID_SIZE;
  //       circle(x + GRID_SIZE / 2, y + GRID_SIZE / 2, GRID_SIZE / 3);
  //     });

  //     // circle((i + 1 / 2) * GRID_SIZE, (j + 1 / 2) * GRID_SIZE, GRID_SIZE / 2);
  //   }
  //   console.log("visited length", this.visited.length);
  //   console.log("opa");
  // }
}
