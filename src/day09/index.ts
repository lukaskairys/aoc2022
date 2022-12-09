import run from "aocrunner";
import { Position, getShiftedTailPos, getShiftedHeadPos, parseMovements } from "./utils.js";

const solution = (segments: number) => (input: string) =>  {

  const rope: Position[] = Array(segments).fill({ x: 0, y: 0 })

  const getTailPos = () => rope[rope.length - 1]

  const visitedTailPositions: Set<string> = new Set([JSON.stringify(getTailPos())])

  parseMovements(input).forEach((m) => {

    for (let s = 0; s < m.steps; s++) {
      rope[0] = getShiftedHeadPos(rope[0], m.direction)

      for (let i = 1; i < rope.length; i++) {
        rope[i] = getShiftedTailPos(rope[i], rope[i - 1])
      }

      visitedTailPositions.add(JSON.stringify(getTailPos()))
    }
  })

  return visitedTailPositions.size
};

const testInput = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`
const firstTestResult = 13
const secondTestResult = 1

const extraTestInput = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`
const extraTestResult = 36


run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: firstTestResult,
      },
    ],
    solution: solution(2),
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: secondTestResult,
      },
      {
        input: extraTestInput,
        expected: extraTestResult,
      },
    ],
    solution: solution(10),
  },
  trimTestInputs: true,
  onlyTests: false,
});
