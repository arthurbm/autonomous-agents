class Food {
  constructor(linha, coluna) {
    // Get the dimensions of the grid
    this.linha = linha;
    this.coluna = coluna;
    this.currentPosition = createVector(this.linha, this.coluna);
  }

  // Display the food
  run() {}

  getFood() {
    return { linha: this.linha, coluna: this.coluna };
  }

  getFoodAsArr() {
    return [this.linha, this.coluna];
  }

  getPosMatrix() {
    return [this.linha, this.coluna];
  }
}
