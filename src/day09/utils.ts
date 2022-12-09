export type Direction = 'U' | 'D' | 'L' | 'R'

export type Movement = {
  direction: Direction
  steps: number
}
export type Position = {
  x: number,
  y: number
}

export function parseMovements(input: string): Movement[] {
  return input.split('\n').map((line) => {
    const [d, s] = line.split(' ');

    if (d !== 'D' && d !== 'L' && d !== 'U' && d !== 'R') {
      throw new Error(`Wrong direction: "${d}"`,)
    }

    return {
      direction: d,
      steps: Number(s)
    }
  })
}

export function posDiff(pStart: Position, pEnd: Position): Position {
  return { x: pEnd.x - pStart.x, y: pEnd.y - pStart.y, }
}

export function getShiftedHeadPos(p: Position, d: Direction): Position {
  switch (d) {
    case 'D': return { x: p.x, y: p.y - 1 }
    case 'U': return { x: p.x, y: p.y + 1 }
    case 'L': return { x: p.x - 1, y: p.y }
    case 'R': return { x: p.x + 1, y: p.y }
  }
}

export function getShiftedTailPos(tp: Position, hp: Position): Position {
  // All positions
  // .xdx.
  // x---x
  // d-t-d
  // x---x
  // .xdx.

  const diff = posDiff(tp, hp)

  // handle "-" and "t" positions - no need to move
  if (
    diff.x >= -1 &&
    diff.x <= 1 &&
    diff.y >= -1 &&
    diff.y <= 1
  ) {
    return { x: tp.x, y: tp.y }
  }

  // handle "d" and "x" positions
  // top
  else if (diff.y === +2 && diff.x === -1) return { x: tp.x - 1, y: tp.y + 1 }
  else if (diff.y === +2 && diff.x === +0) return { x: tp.x,     y: tp.y + 1 }
  else if (diff.y === +2 && diff.x === +1) return { x: tp.x + 1, y: tp.y + 1 }
  // bottom
  else if (diff.y === -2 && diff.x === -1) return { x: tp.x - 1, y: tp.y - 1 }
  else if (diff.y === -2 && diff.x === +0) return { x: tp.x,     y: tp.y - 1 }
  else if (diff.y === -2 && diff.x === +1) return { x: tp.x + 1, y: tp.y - 1 }
  // right
  else if (diff.x === +2 && diff.y === -1) return { x: tp.x + 1, y: tp.y - 1 }
  else if (diff.x === +2 && diff.y === +0) return { x: tp.x + 1, y: tp.y     }
  else if (diff.x === +2 && diff.y === +1) return { x: tp.x + 1, y: tp.y + 1 }
  // left
  else if (diff.x === -2 && diff.y === -1) return { x: tp.x - 1, y: tp.y - 1 }
  else if (diff.x === -2 && diff.y === +0) return { x: tp.x - 1, y: tp.y     }
  else if (diff.x === -2 && diff.y === +1) return { x: tp.x - 1, y: tp.y + 1 }

   // handle "." positions
   else if (diff.x === +2 && diff.y === +2) return { x: tp.x + 1, y: tp.y + 1 }
   else if (diff.x === +2 && diff.y === -2) return { x: tp.x + 1, y: tp.y - 1 }
   else if (diff.x === -2 && diff.y === -2) return { x: tp.x - 1, y: tp.y - 1 }
   else if (diff.x === -2 && diff.y === +2) return { x: tp.x - 1, y: tp.y + 1 }

  throw new Error(`Moved too much: diff(x: ${diff.x},y: ${diff.y})`);
}

export const findBounds = (input: string) => {
  let xMax = 1;
  let xMin = 1;
  let yMax = 1;
  let yMin = 1;
  let currentX = 1;
  let currentY = 1;
  input.split("\n").forEach((line) => {
    const [direction, distance] = line.split(" ");
    switch (direction) {
      case "R":
        currentX += Number(distance);
        if (currentX > xMax) {
          xMax = currentX;
        }
        break;
      case "L":
        currentX -= Number(distance);
        if (currentX < xMin) {
          xMin = currentX;
        }
        break;
      case "U":
        currentY += Number(distance);
        if (currentY > yMax) {
          yMax = currentY;
        }
        break;
      case "D":
        currentY -= Number(distance);
        if (currentY < yMin) {
          yMin = currentY;
        }
        break;
    }
  });
  return {xMax, xMin, yMax, yMin};
};


