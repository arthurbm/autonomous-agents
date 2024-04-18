import P5 from "p5";
import { floorImg, grassImg, pikachuImg, trainerImg, wallImg, waterImg } from "../scripts/sketch";
import { GRID_SIZE } from "../utils/constants";

export interface Cell {
  title: string;
  weight: number;
  checked: boolean;
}

export class Grid {
  linha: number;
  coluna: number;
  cellSize: number;
  gridMatrix: Array<Array<Cell>>;
  p5: P5;
  constructor(linha: number, coluna: number, cellSize: number, p5: P5) {
    this.linha = linha;
    this.coluna = coluna;
    this.cellSize = cellSize;
    this.gridMatrix = [];
    this.p5 = p5;

    for (let i = 0; i < this.coluna; i++) {
      const col = [];
      for (let j = 0; j < this.linha; j++)
        col.push({ title: "vazio", weight: 1, checked: false, parent: null });

      this.gridMatrix.push(col);
    }
  }

  drawGrid() {
    const p5 = this.p5;
    for (let i = 0; i < this.coluna; i++) {
      for (let j = 0; j < this.linha; j++) {
        p5.fill("#E3350D");
        p5.rect(
          i * this.cellSize,
          j * this.cellSize,
          this.cellSize,
          this.cellSize
        );

        switch (this.gridMatrix[i][j].title) {
          case "comida":
            p5.image(
              pikachuImg,
              (i - 0.5) * GRID_SIZE,
              (j - 0.5) * GRID_SIZE,
              GRID_SIZE * 2,
              GRID_SIZE * 2
            );
            break;
          case "agent":
            p5.image(
              trainerImg,
              i * GRID_SIZE,
              j * GRID_SIZE,
              GRID_SIZE,
              GRID_SIZE
            );
            break;
          case "water":
            p5.image(waterImg, i * GRID_SIZE, j * GRID_SIZE, GRID_SIZE, GRID_SIZE);
            break;
          case "grass":
            p5.image(grassImg, i * GRID_SIZE, j * GRID_SIZE, GRID_SIZE, GRID_SIZE);
            break;
          case "parede":
            p5.image(wallImg, i * GRID_SIZE, j * GRID_SIZE, GRID_SIZE, GRID_SIZE);
            break;
          case "vazio":
            p5.image(floorImg, i * GRID_SIZE, j * GRID_SIZE, GRID_SIZE, GRID_SIZE);
            break;
          default:
            break;
        }
      }
    }
  }

  addObstaculos(grassCount: number, waterCount: number, paredeCount: number) {
    const p5 = this.p5;
    for (let i = 0; i < grassCount; i++) {
      const x = p5.int(p5.random(this.coluna));
      const y = p5.int(p5.random(this.linha));
      this.gridMatrix[x][y] = {
        title: "grass",
        weight: 5,
        checked: false,
        
      };
    }

    for (let i = 0; i < waterCount; i++) {
      const x = p5.int(p5.random(this.coluna));
      const y = p5.int(p5.random(this.linha));
      this.gridMatrix[x][y] = {
        title: "water",
        weight: 10,
        checked: false,
      };
    }

    for (let i = 0; i < paredeCount; i++) {
      const x = p5.int(p5.random(this.coluna));
      const y = p5.int(p5.random(this.linha));
      this.gridMatrix[x][y] = {
        title: "parede",
        weight: Infinity,
        checked: false,
      };
    }
  }

  addFood() {
    let x, y;
    do {
      x = Math.floor(Math.random() * this.coluna);
      y = Math.floor(Math.random() * this.linha);
    } while (this.gridMatrix[x][y].title !== "vazio");

    this.gridMatrix[x][y] = {
      title: "comida",
      weight: 0,
      checked: false,
    };
    return { foodX: x, foodY: y };
  }

  addAgent() {
    let x, y;
    do {
      x = Math.floor(Math.random() * this.coluna);
      y = Math.floor(Math.random() * this.linha);
    } while (this.gridMatrix[x][y].title !== "vazio");

    this.gridMatrix[x][y] = { title: "agente", weight: Infinity, checked: false };
    return { agentX: x, agentY: y };
  }
}
