import run from "aocrunner";
import * as R from "ramda";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const sorted = R.pipe(
    R.split(/\n\s*\n/),
    R.map(elf => elf.split(/\s+/).map(Number)),
    R.map(snack => snack.reduce((a, b) => a + b, 0)),
    R.sort((a, b) => b - a)
  )(input);

  return sorted[0];
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const sorted = R.pipe(
    R.split(/\n\s*\n/),
    R.map(elf => elf.split(/\s+/).map(Number)),
    R.map(snack => snack.reduce((a, b) => a + b, 0)),
    R.sort((a, b) => b - a)
  )(input);

  return R.slice(0,3, sorted).reduce((a, b) => a+b);
};

run({
  part1: {
    tests: [
      {
        input: `1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000`,
        expected: 24000,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000`,
        expected: 45000,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
