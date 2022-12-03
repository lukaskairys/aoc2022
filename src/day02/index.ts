import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  enum scoreTable {
    "A X" = 4,
    "A Y" = 8,
    "A Z" = 3,
    "B X" = 1,
    "B Y" = 5,
    "B Z" = 9,
    "C X" = 7,
    "C Y" = 2,
    "C Z" = 6,
  }

  return input.split(/\n/)
              .map(game => scoreTable[game as keyof typeof scoreTable])
              .reduce((a, b) => a + b, 0);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const scoreTable = {
    "A X": 3,
    "A Y": 4,
    "A Z": 8,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 2,
    "C Y": 6,
    "C Z": 7,
  }

  return input.split(/\n/).map(game => scoreTable[game as keyof typeof scoreTable]).reduce((a, b) => a + b, 0);
};

run({
  part1: {
    tests: [
      {
        input: `A Y
B X
C Z`,
        expected: 15,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `A Y
B X
C Z`,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
