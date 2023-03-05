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
        switch (this.gridMatrix[i][j].title) {
          case "vazio":
            fill("#BEBEBE");
            break;

          case "grass":
            fill(0, 200, 0);
            break;

          case "water":
            fill("#335DE6");
            break;

          case "parede":
            fill("#222222");
            break;

          case "comida":
            fill("#A92E9F");
            break;
          case "agente":
            fill("red");
            break;
        }
        rect(
          i * this.cellSize,
          j * this.cellSize,
          this.cellSize,
          this.cellSize
        );
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
