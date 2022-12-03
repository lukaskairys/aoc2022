import run from "aocrunner";

const letterToNumber = (letter: string) => {
  if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) < 123) {
    return letter.charCodeAt(0) - 96;
  }
  if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) < 91) {
    return letter.charCodeAt(0) - 38;
  }
  return -1;
};

const splitString = (str: string) =>  [str.slice(0, str.length/2), str.slice(str.length/2)]

const findError = (input: string[]) => {
  for (let str of input[0]) {
    if (input[1].includes(str)) {
      return str;
    }
  }
  throw new Error("No error found");
  
}

const findBadge = (input: string[]) => {
  for (let str of input[0]) {
    if (input[1].includes(str)) {
      if (input[2].includes(str)) {
        return str;
      }
    }
  }
  throw new Error("No badge found");
  
}

const groupIn3 = (arr: string[]) => {
  const res = [];
  for(let i in arr) {
     if(parseInt(i) % 3 === 0){
        res.push([arr[i]]);
     }
     else{
        res[res.length-1].push(arr[i]);
     };
  };
  return res;
};

const part1 = (input: string) => {
  return input.split(/\n/).map(splitString).map(findError).map(letterToNumber).reduce((a, b) => a + b, 0);
};

const part2 = (input: string) => {
  return groupIn3(input.split(/\n/)).map(findBadge).map(letterToNumber).reduce((a, b) => a + b, 0);
};

const testInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`
const firstTestResult = 157
const secondTestResult = 70

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
