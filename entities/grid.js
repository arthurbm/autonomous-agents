class Grid {
  constructor(linha, coluna, cellSize) {
    this.linha = linha;
    this.coluna = coluna;
    this.cellSize = cellSize;
    this.gridMatrix = [];

    for (let i = 0; i < this.coluna; i++) {
      let col = [];
      for (let j = 0; j < this.linha; j++)
        col.push({ title: "vazio", weight: 0, checked: false, parent: null });

      this.gridMatrix.push(col);
    }
  }

  drawGrid() {
    for (let i = 0; i < this.coluna; i++) {
      for (let j = 0; j < this.linha; j++) {
        fill("red");
        rect(
          i * this.cellSize,
          j * this.cellSize,
          this.cellSize,
          this.cellSize
        );

        switch (this.gridMatrix[i][j].title) {
          case "comida":
            image(
              pikachuImg,
              (i - 0.5) * GRID_SIZE,
              (j - 0.5) * GRID_SIZE,
              GRID_SIZE * 2,
              GRID_SIZE * 2
            );
            break;
          case "agent":
            image(
              trainerImg,
              i * GRID_SIZE,
              j * GRID_SIZE,
              GRID_SIZE,
              GRID_SIZE
            );
            break;
          case "water":
            image(waterImg, i * GRID_SIZE, j * GRID_SIZE, GRID_SIZE, GRID_SIZE);
            break;
          case "grass":
            image(grassImg, i * GRID_SIZE, j * GRID_SIZE, GRID_SIZE, GRID_SIZE);
            break;
          case "parede":
            image(wallImg, i * GRID_SIZE, j * GRID_SIZE, GRID_SIZE, GRID_SIZE);
            break;
          case "vazio":
            image(floorImg, i * GRID_SIZE, j * GRID_SIZE, GRID_SIZE, GRID_SIZE);
            break;
          default:
            break;
        }
      }
    }
  }

  addObstaculos(grassCount, waterCount, paredeCount) {
    for (let i = 0; i < grassCount; i++) {
      let x = int(random(this.coluna));
      let y = int(random(this.linha));
      this.gridMatrix[x][y] = {
        title: "grass",
        weight: 5,
        checked: false,
        parent: null,
      };
    }

    for (let i = 0; i < waterCount; i++) {
      let x = int(random(this.coluna));
      let y = int(random(this.linha));
      this.gridMatrix[x][y] = {
        title: "water",
        weight: 10,
        checked: false,
        parent: null,
      };
    }

    for (let i = 0; i < paredeCount; i++) {
      let x = int(random(this.coluna));
      let y = int(random(this.linha));
      this.gridMatrix[x][y] = {
        title: "parede",
        weight: Infinity,
        checked: false,
        parent: null,
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
      parent: null,
    };
    return { foodX: x, foodY: y };
  }

  addAgent() {
    let x, y;
    do {
      x = Math.floor(Math.random() * this.coluna);
      y = Math.floor(Math.random() * this.linha);
    } while (this.gridMatrix[x][y].title !== "vazio");

    this.gridMatrix[x][y] = { title: "agente", weight: Infinity };
    return { agentX: x, agentY: y };
  }
}
