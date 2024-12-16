export class NavigationStack {
  constructor() {
    this.items = [];
  }

  push(page) {
    this.items.push(page);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
    return null;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
    return null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }
}
