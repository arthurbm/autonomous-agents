import P5 from "p5";
import { trainerImg } from "../scripts/sketch";
import { GRID_SIZE } from "../utils/constants";
import { Grid } from "./grid";

let agentSpeed = 0.25;
const vectorVel: Array<number> = [];

export class Agent {
  linha: number;
  coluna: number;
  currentPosition: P5.Vector;
  targetPosition: Array<P5.Vector>;
  currentTargetIndex: number;
  grid: Grid;
  p5: P5;
  constructor(x: number, y: number, grid: Grid, p5: P5) {
    this.linha = x;
    this.coluna = y;
    this.currentPosition = p5.createVector(x, y);
    this.targetPosition = [];
    this.currentTargetIndex = 0;
    this.grid = grid;
    this.p5 = p5;
  }

  move(grid: Grid) {
    if (this.targetPosition === null || this.targetPosition.length === 0) {
      return;
    }

    const currentTarget = this.targetPosition[this.currentTargetIndex];

    const direction = P5.Vector.sub(currentTarget, this.currentPosition);
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
    const s = vectorVel.pop();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const velocity: P5.Vector = P5.Vector.mult(direction, s);

    this.currentPosition.add(velocity);

    if (P5.Vector.dist(this.currentPosition, currentTarget) < agentSpeed) {
      this.currentTargetIndex++;

      if (this.currentTargetIndex >= this.targetPosition.length) {
        this.targetPosition = [];
        this.currentTargetIndex = 0;
      }
    }

    const { x, y } = this.currentPosition;
    this.p5.fill("#E3350D");
    //rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    // rect(x * GRID_SIZE, y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
    this.p5.image(trainerImg, x * GRID_SIZE, y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
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

  getPosMatrix() {
    return [this.linha, this.coluna];
  }
}
