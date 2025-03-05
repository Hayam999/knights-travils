import { Position, Vertix } from "./data.js";

// Start is a vertix
// Returns: Updates children of Start to all possible moves starting from it
function possibleMoves(start) {
  let steps = possibleSteps(start.data);
  let children = makeVerticies(start, steps);
  start.children = children;
}

// Parameters:
// pos: is a position (x, y)
// Returns: Array of all possible end positions from given positions
function possibleSteps(pos) {
  let possibeStepsArray = [];
  let right = stepRight(pos);
  let left = stepLeft(pos);
  let forward = stepForward(pos);
  let backward = stepBackward(pos);
  if (right) {
    let endPos1 = twoStepsForward(right);
    let endPos2 = twoStepsBackward(right);

    if (endPos1) {
      possibeStepsArray.push(endPos1);
    }
    if (endPos2) {
      possibeStepsArray.push(endPos2);
    }
  }

  if (left) {
    let endPos1 = twoStepsForward(left);
    let endPos2 = twoStepsBackward(left);

    if (endPos1) {
      possibeStepsArray.push(endPos1);
    }
    if (endPos2) {
      possibeStepsArray.push(endPos2);
    }
  }

  if (forward) {
    let endPos1 = twoStepsRight(forward);
    let endPos2 = twoStepsLeft(forward);

    if (endPos1) {
      possibeStepsArray.push(endPos1);
    }
    if (endPos2) {
      possibeStepsArray.push(endPos2);
    }
  }
  if (backward) {
    let endPos1 = twoStepsRight(backward);
    let endPos2 = twoStepsLeft(backward);

    if (endPos1) {
      possibeStepsArray.push(endPos1);
    }
    if (endPos2) {
      possibeStepsArray.push(endPos2);
    }
  }

  return possibeStepsArray;
}

// move 1 Step to the right
function stepRight(pos) {
  if (pos.x >= 7) {
    return null;
  } else {
    return new Position(pos.x + 1, pos.y);
  }
}

// move 1 Step to the left
function stepLeft(pos) {
  if (pos.x <= 0) {
    return null;
  } else {
    return new Position(pos.x - 1, pos.y);
  }
}

// move 1 Step forward
function stepForward(pos) {
  if (pos.y >= 7) {
    return null;
  } else {
    return new Position(pos.x, pos.y + 1);
  }
}

// move 1 step backward
function stepBackward(pos) {
  if (pos.y <= 0) {
    return null;
  } else {
    return new Position(pos.x, pos.y - 1);
  }
}

// move 2 steps to the right
function twoStepsRight(pos) {
  if (pos.x >= 6) {
    return null;
  } else {
    return new Position(pos.x + 2, pos.y);
  }
}

// move 2 steps to the left
function twoStepsLeft(pos) {
  if (pos.x <= 1) {
    return null;
  } else {
    return new Position(pos.x - 2, pos.y);
  }
}

// move 2 steps forward
function twoStepsForward(pos) {
  if (pos.y >= 6) {
    return null;
  } else {
    return new Position(pos.x, pos.y + 2);
  }
}

// move 2 steps backward
function twoStepsBackward(pos) {
  if (pos.y <= 1) {
    return null;
  } else {
    return new Position(pos.x, pos.y - 2);
  }
}

// parent: is a Vertix that is the parent of all given positions,
// children: all possible positions from that start
function makeVerticies(parent, children) {
  let len = children.length;
  let vertices = [];
  for (let i = 0; i < len; i++) {
    vertices[i] = new Vertix(children[i], parent);
  }
  return vertices;
}
export { possibleMoves };
