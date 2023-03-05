const GRID_SIZE = 30;
const GRID_WIDTH = 20;
const GRID_HEIGHT = 20;

function setup() {
    createCanvas(GRID_WIDTH * GRID_SIZE, GRID_HEIGHT * GRID_SIZE);
    world = new World();
  }
  
  function draw() {
    background(220);
    world.run();
  }