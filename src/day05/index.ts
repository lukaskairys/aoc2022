import run from "aocrunner";

const parseLine = (line: string) => line.trim().substring(5).split(" from ").map((x) => x.split(" to ")).flatMap((x) => x.map((y) => parseInt(y)))

const part1 = (input: string) => {

  const stacks = {
    1: ["Q" , "M" , "G" , "C" , "L"],
    2: ["R" , "D" , "L" , "C" , "T" , "F" , "H", "G"],
    3: ["V" , "J" , "F" , "N" , "M" , "T" , "W", "R"],
    4: ["J" , "F" , "D" , "V" , "Q" , "P"],
    5: ["N" , "F" , "M" , "S" , "L" , "B" , "T"],
    6: ["R" , "N" , "V" , "H" , "C" , "D" , "P"],
    7: ["H" , "C" , "T"],
    8: ["G" , "S" , "J" , "V" , "Z" , "N" , "H", "P"],
    9: ["Z" , "F" , "H" , "G"]
  }

  for ( let line of input.split(/\n/) ) {

    const [qty, from, to] = parseLine(line)

    for (let i = 0; i < qty; i++) {
      stacks[to].push(stacks[from].pop())
    }
  }

  const resultArr = []

  for ( let stack in stacks ) {
    resultArr.push(stacks[stack].slice(-1)[0])
  }

  return resultArr.join("");
};

const part2 = (input: string) => {

  const stacks = {
    1: ["Q" , "M" , "G" , "C" , "L"],
    2: ["R" , "D" , "L" , "C" , "T" , "F" , "H", "G"],
    3: ["V" , "J" , "F" , "N" , "M" , "T" , "W", "R"],
    4: ["J" , "F" , "D" , "V" , "Q" , "P"],
    5: ["N" , "F" , "M" , "S" , "L" , "B" , "T"],
    6: ["R" , "N" , "V" , "H" , "C" , "D" , "P"],
    7: ["H" , "C" , "T"],
    8: ["G" , "S" , "J" , "V" , "Z" , "N" , "H", "P"],
    9: ["Z" , "F" , "H" , "G"]
  }

  for ( let line of input.trim().split(/\n/) ) {

    const [qty, from, to] = parseLine(line)
    stacks[to].push(...stacks[from].splice(-qty))
  }

  const resultArr = []

  for ( let stack in stacks ) {
    resultArr.push(stacks[stack].slice(-1)[0])
  }

  return resultArr.join("");
};

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
});
