import { Position } from "./knight-moves.js";

// Parameters: Start, End: are Positoin (x, y)
// Returns: Array of all Possible Positions that leads from Start to End
function possibleMoves(start, end) {
  // check All Possible Steps then filter them
  // based on which is gonna make me reach to the End or near it
  return [];
}

// Parameters:
// pos: is a position (x, y)
// Returns: Array of all possible end positions from given position
function PossibleSteps(pos) {
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
    let endPos1 = twoStepsright(forward);
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
    let endPos2 = twoStepsLeft(forward);

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
export { possibleMoves };
