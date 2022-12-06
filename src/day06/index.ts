import run from "aocrunner";
import * as R from "ramda";

const genSolution = (markerSize: number) => (input: string) => {
  for ( let i = markerSize; i < input.length; i++ ) {
    
    const chars:string[] = [];

    for ( let j = 0; j < markerSize; j++ ) {
      chars.push(input[i-j]) ;
    }

    if (R.uniq(chars).length === markerSize) {
      return i + 1;
    }
  }
  return -1;
}

const testInput = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`
const firstTestResult = 7
const secondTestResult = 19

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: firstTestResult,
      },
    ],
    solution: genSolution(4),
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: secondTestResult,
      },
    ],
    solution: genSolution(14),
  },
  trimTestInputs: true,
  onlyTests: false,
});
