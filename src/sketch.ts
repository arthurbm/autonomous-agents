import P5 from 'p5';
import { World } from './models/world';
import { SelectedSearch } from './scripts/handleButtons';
import { GRID_HEIGHT, GRID_SIZE, GRID_WIDTH } from './utils/constants';

export let trainerImg: P5.Image;
export let pikachuImg: P5.Image;
export let grassImg: P5.Image;
export let waterImg: P5.Image;
export let wallImg: P5.Image;
export let floorImg: P5.Image;

const sketch = (p5: P5) => {
  const selectedSearch: SelectedSearch = localStorage.getItem("SELECTED_SEARCH") as SelectedSearch || "none";

  let world: World;
  p5.setup = () => {

    p5.createCanvas(GRID_WIDTH * GRID_SIZE, GRID_HEIGHT * GRID_SIZE);
    world = new World(p5, selectedSearch);
  };

  p5.draw = () => {
    p5.background(220);
    world.run();
  };

  p5.preload = () => {
    trainerImg = p5.loadImage("/trainer_p.png");
    pikachuImg = p5.loadImage("/pikachu.png");
    grassImg = p5.loadImage("/grass2.png");
    waterImg = p5.loadImage("/water2.png");
    wallImg = p5.loadImage("/wall2.png");
    floorImg = p5.loadImage("/floor3.png");
  }
}

new P5(sketch);