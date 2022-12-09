import run from "aocrunner";
import { getScenicScore, inputToMatrix, isVisible, sum } from "./utils.js";


const part1 = (input: string) => {
  const forest = inputToMatrix(input)
  const visibilityMap = forest.map((row, i) => row.map((_, j) => isVisible(j, i, forest)));
  return visibilityMap.map((row) => row.reduce(sum)).reduce(sum);
};

const part2 = (input: string) => {
  const forest = inputToMatrix(input)

  const scoreMap = forest.map((row, i) => {
	  return row.map((_, j) => getScenicScore(j, i, forest));
  });

  return Math.max(...scoreMap.map((row) => Math.max(...row)));
};

const testInput = `30373
25512
65332
33549
35390`
const firstTestResult = 21
const secondTestResult = 8

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: firstTestResult,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: secondTestResult,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
