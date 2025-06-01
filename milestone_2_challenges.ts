// Challenge 1: Sum of Positives
function sumOfPositives(numbers: number[]): number {
  let sum = 0;

  for (let num of numbers) {
    if (num > 0) {
      sum += num;
    }
  }

  return sum;
}
console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));


// Challenge 2: Find Maximum Value
function findMax(numbers: number[]): number {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
console.log(findMax([3, 7, 2, 9, 5]));


// Challenge 3: Election winner
type Candidate = {
  name: string;
  votes: number;
};

function findWinner(candidates: Candidate[]): Candidate {
  let winner = candidates[0];
  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i].votes > winner.votes) {
      winner = candidates[i];
    }
  }
  return winner;
}

const candidates: Candidate[] = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 }
];

console.log(findWinner(candidates));
