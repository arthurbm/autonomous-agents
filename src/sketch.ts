import P5 from 'p5';

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(400, 400);
  };

  p5.draw = () => {
    p5.background(220);

    p5.fill(255, 0, 0);
    p5.rect(0, 0, 100, 100);
  };
}

new P5(sketch);