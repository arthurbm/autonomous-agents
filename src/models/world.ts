import P5 from "p5";
import { aStar, convert2DArrayToVector } from "../searches";
import { GRID_HEIGHT, GRID_SIZE, GRID_WIDTH } from "../utils/constants";
import { Agent } from "./agent";
import { Food } from "./food";
import { Grid } from "./grid";

type SearchFunction = {
  (grid: Grid, start: Array<number>, goal: Array<number>): {
    path: Array<Array<number>>;
    visited: Array<Array<number>>;
  };
}

export class World {
  grid: Grid;
  food: Food;
  agent: Agent;
  visitedToDraw: Array<Array<number>>;
  visited: Array<Array<number>>;
  path: P5.Vector[];
  p5: P5;

  constructor(p5: P5) {
    this.grid = new Grid(GRID_WIDTH, GRID_HEIGHT, GRID_SIZE, p5);
    this.grid.addObstaculos(200, 100, 100);
    const { foodX, foodY } = this.grid.addFood();
    const { agentX, agentY } = this.grid.addAgent();
    this.food = new Food(foodX, foodY, p5);
    this.agent = new Agent(agentX, agentY, this.grid, p5);
    this.visited = [];
    this.visitedToDraw = [];
    this.path = [];
    this.p5 = p5;

    this.setAlgorithm()
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
    this.grid = new Grid(GRID_WIDTH, GRID_HEIGHT, GRID_SIZE, this.p5);
    this.grid.addObstaculos(200, 100, 100);
    const { foodX, foodY } = this.grid.addFood();
    const { agentX, agentY } = this.grid.addAgent();
    this.food = new Food(foodX, foodY, this.p5);
    this.agent = new Agent(agentX, agentY, this.grid, this.p5);
    this.visitedToDraw = [];

    this.setAlgorithm()
  }

  setAlgorithm() {
    this.setPath(aStar);
  }

  updatePathVisitedTargetPosition(path: P5.Vector[], visited: Array<Array<number>>) {
    this.path = path;
    this.visited = visited;
    this.agent.targetPosition = this.path;
  }

  setPath(searchFunction: SearchFunction) {
    const { path, visited } = searchFunction(this.grid, this.agent.getPosMatrix(), this.food.getPosMatrix());
    const pathConverted = convert2DArrayToVector(path, this.p5);
    this.updatePathVisitedTargetPosition(pathConverted, visited);
  }

  drawPath() {
    const pathColor = this.p5.color(230, 230, 25);
    this.p5.fill(pathColor);
    for (let i = 0; i < this.path.length - 1; i++) {
      const x = this.path[i].x * GRID_SIZE;
      const y = this.path[i].y * GRID_SIZE;
      this.p5.circle(x + GRID_SIZE / 2, y + GRID_SIZE / 2, GRID_SIZE / 3);
    }
  }

  drawSearch() {
    const pathColor = this.p5.color(255, 255, 255);

    let visitedAux = this.visited.shift();

    if (visitedAux) {
      this.visitedToDraw.push(visitedAux);

      this.p5.fill(pathColor);

      this.visitedToDraw.forEach((cell) => {
        const i = (cell[0] + 0.5) * GRID_SIZE;
        const j = (cell[1] + 0.5) * GRID_SIZE;
        // console.log(i, j);
        this.p5.circle(i, j, GRID_SIZE / 2);
      });
    }
    // console.log("visited length", this.visited.length);
  }
}
