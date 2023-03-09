type PathCost = {
  path: Array<Array<number>>,
  cost: number,
  costFromStart?:number
};

export class PriorityQueue {
  data: Array<PathCost>;
  compare: (a: PathCost, b: PathCost) => number;

  constructor(compare: (a: PathCost, b: PathCost) => number) {
    this.data = [];
    this.compare = compare;
  }

  enqueue(item: PathCost) {
    let added = false;
    for (let i = 0; i < this.data.length; i++) {
      if (this.compare(item, this.data[i]) < 0) {
        this.data.splice(i, 0, item);
        added = true;
        break;
      }
    }
    if (!added) {
      this.data.push(item);
    }
  }

  dequeue() {
    if(!this.isEmpty()){
      return this.data.shift();
    }
    return;
  }

  isEmpty() {
    return this.data.length === 0;
  }
}