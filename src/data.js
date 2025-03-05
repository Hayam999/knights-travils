class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  equal(pos) {
    return this.x == pos.x && this.y == pos.y;
  }
}

class Vertix {
  constructor(data, parent) {
    this.data = data;
    this.parent = parent;
    this.children = null;
  }
}

export { Position, Vertix };
