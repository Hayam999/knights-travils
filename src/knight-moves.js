import { Vertix, Position } from "./data.js";
import { possibleMoves } from "./possible-moves.js";
// Start Position, End Position => all positions the knight will stop at on it's shortest possible way from start to end

// knight moves will be responsible of makeing the root vertix with parent null.
function knightMoves(start, end) {
  let root = new Vertix(start, null);
  return knightMovesHelper(root, end, [root]);
}

// vertix: is a Vertix
// end   : is a position
function knightMovesHelper(vertix, end, queue) {
  if (vertix.data.equal(end)) {
    return extractPath(vertix, []);
  } else if (vertix.children === null) {
    possibleMoves(vertix);
    queue = [...queue, ...vertix.children];
  }
  queue.shift();
  return knightMovesHelper(queue[0], end, queue);
}

// returns all parents of a given vertix
function extractPath(vertix, parents) {
  if (vertix.parent === null) {
    parents.unshift(vertix);
    return parents;
  } else {
    parents.unshift(vertix);
    return extractPath(vertix.parent, parents);
  }
}

const p1 = new Position(3, 3);
const p2 = new Position(4, 3);
const p3 = new Position(0, 0);

console.log(knightMoves(p3, p1));
