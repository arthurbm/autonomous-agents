const GRID_SIZE = 30 * 1.2;
const GRID_WIDTH = 20 * 1.2;
const GRID_HEIGHT = 20 * 1.2;

let trainerImg;
let pikachuImg;
let grassImg;
let waterImg;
let wallImg;
let floorImg;

function preload() {
  // grapesImg = loadImage('assets/grapes.png');
  // leafImg = loadImage('assets/leaf.png');
  trainerImg = loadImage("assets/trainer_p.png");
  pikachuImg = loadImage("assets/pikachu.png");
  grassImg = loadImage("assets/grass2.png");
  waterImg = loadImage("assets/water2.png");
  wallImg = loadImage("assets/wall2.png");
  floorImg = loadImage("assets/floor3.png");
}

function setup() {
  createCanvas(GRID_WIDTH * GRID_SIZE, GRID_HEIGHT * GRID_SIZE);
  world = new World();
}

function draw() {
  background(220);
  world.run();
}
