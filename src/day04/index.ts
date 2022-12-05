import run from "aocrunner";

const part1 = (input: string) => {
  let result = 0;

  for ( let line of input.split(/\n/) ) {
    const [xMin, xMax] = line.split(",")[0].split("-");
    const [yMin, yMax] = line.split(",")[1].split("-");

    if (+xMin <= +yMin && +xMax >= +yMax) {
      result += 1;
      continue
    } 
    
    if (+xMin >= +yMin && +xMax <= +yMax) {
      result += 1;
      continue
    }
  }

  return result;
};

const part2 = (input: string) => {
  let result = 0;

  for ( let line of input.split(/\n/) ) {
    const [xMin, xMax] = line.split(",")[0].split("-");
    const [yMin, yMax] = line.split(",")[1].split("-");

    if (+xMin >= +yMin && +xMin <= +yMax) {
      result += 1;
      continue
    } 
    
    if (+xMax >= +yMin && +xMax <= +yMax) {
      result += 1;
      continue
    } 

    if (+yMin >= +xMin && +yMin <= +xMax) {
      result += 1;
      continue
    }

    if (+yMax >= +xMin && +yMax <= +xMax) {
      result += 1;
      continue
    }
  }

  return result;
};


const testInput = `5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`
const firstTestResult = 2
const secondTestResult = 4

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
