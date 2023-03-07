import P5 from "p5";

export class Food {
  linha: number;
  coluna: number;
  currentPosition: P5.Vector;
  constructor(linha: number, coluna: number, p5: P5) {
    // Get the dimensions of the grid
    this.linha = linha;
    this.coluna = coluna;
    this.currentPosition = p5.createVector(this.linha, this.coluna);
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
