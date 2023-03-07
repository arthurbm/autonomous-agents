export class PriorityQueue {
  a: number;
  b: number;
  elements: unknown[];
  constructor(a: number, b: number) {
    this.a = a
    this.b = b
    this.elements = [];
  }

  enqueue(element: unknown, priority: unknown) {
    this.elements.push({ element, priority });
    this.elements.sort((a, b) => {
      if (a.priority === undefined) {
        return 1;
      }
      if (b.priority === undefined) {
        return -1;
      }
      return a.priority - b.priority;
    });
  }

  dequeue() {
    return this.elements.shift().element;
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}