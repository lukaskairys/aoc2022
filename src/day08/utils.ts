export const inputToMatrix = (input:string) => input.split('\n').map((l)=>l.split('').map(Number));
export const sum = (sum: number, curr:number) => sum + curr;
export const product = (prod: number, curr:number) => prod * curr;

export const getTrees = (xPos: number, yPos: number, forest: number[][]) => ({
	current: forest[yPos][xPos],
	left: forest[yPos].slice(0, xPos),
	right: forest[yPos].slice(xPos + 1),
	up: forest.slice(0, yPos).map(l => l[xPos]),
	down: forest.slice(yPos + 1).map(l => l[xPos]),
});

export const getTreesInOrder = (xPos: number, yPos: number, forest: number[][]) => {
  const trees = getTrees(xPos, yPos, forest);
  return {
  ...trees,
	left: trees.left.reverse(),
	up: trees.up.reverse(),
  }
};

export const isVisible = (xPos: number, yPos: number, forest: number[][]):number => {
	const {current, left, right, up, down} = getTrees(xPos, yPos, forest);

  for (let view of [left, up, right, down]) {
    if(!view.some(t => t >= current)) {
      return 1;
    }
  }
  return 0;
};

export const countVisibleTrees = (line: number[], curr:number) => {
	if(Math.max(...line) < curr)
		return line.length; 
	return line.findIndex(t => t >= curr) + 1;
};

export const getScenicScore = (xPos: number, yPos: number, forest: number[][]):number => {
	const {current, left, right, up, down} = getTreesInOrder(xPos, yPos, forest);

	const score = [left, up, right, down]
		.map(view => countVisibleTrees(view, current))
		.reduce(product);

	return score;
};
