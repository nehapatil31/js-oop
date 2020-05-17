//Stack implementation using ES6 classes and WeakMap

const _items = new WeakMap();

class Stack {
  constructor() {
    this.count = 0;
    _items.set(this, []);
  }

  push(item) {
    const items = _items.get(this);
    items.push(item);
    this.count++;
  }

  pop() {
    const items = _items.get(this);
    if (this.count == 0) throw new Error("Stack is empty");

    this.count--;
    return items.pop();
  }

  peek() {
    const items = _items.get(this);
    if (this.count == 0) throw new Error("Stack is empty");

    return items[items.length - 1];
  }
}

const s = new Stack();
