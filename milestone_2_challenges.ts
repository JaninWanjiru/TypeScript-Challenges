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


// Challenge 4: Longest Word
function findLongestWord(words: string[]): string {
  let longest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

const words = ["apple", "banana", "pear", "grapefruit"]
console.log(findLongestWord(words));


// Challenge 5: Count Properties
function countProperties(obj: object): number {
  return Object.keys(obj).length;
}

const ObjExample = { name: "Alice", age: 25, city: "Paris" };
console.log(countProperties(ObjExample));


// Challenge 6: Filter by Length
function filterByLength(words: string[], minLength: number): string[] {
  let newArray: string[] = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      newArray.push(words[i]);
    }
  }

  return newArray;
}

const newArrayExample = ["cat", "giraffe", "hippo", "dog", "elephant"];
console.log(filterByLength(newArrayExample, 5));


// Challenge 7: Sum of Even Numbers
function sumEvenNumbers(myArray: number[]): number {
  let sumOfValues = 0;

  for(let i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 === 0){
      sumOfValues = sumOfValues + myArray[i];
    }
  }
  return sumOfValues;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));


// Challenge 8: Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(array: number[]): number {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenSum += array[i];
    } else {
      oddSum += array[i];
    }
  }

  return evenSum - oddSum;
}

console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));


// Challenge 9: Count Truthy
function countTruthy(object: any): number {
  let count = 0;
  for (let key in object) {
    if (object[key]) {
      count++;
    }
  }
  return count;
}

console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));


// Challenge 10: Average of Numbers
function average(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average([2, 4, 6, 8])); 
console.log(average([]));  


// Challenge 11: Linear Search
function linearSearch(arr: unknown[], value: unknown): number {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    if (typeof current === typeof value) {
      if (current === value) {
        return i;
      }
    }
  }

  return -1;
}

console.log(linearSearch([5, 3, 7, 1, 4], 7));   
console.log(linearSearch([5, 3, 7, 1, 4], 10)); 


// Challenge 12: Reverse Linear Search
function reverseLinearSearch(arr: unknown[], value: unknown): number {
  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i];

    if (typeof current === typeof value) {
      if (current === value) {
        return i;
      }
    }
  }

  return -1;
}

console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7));  
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10));    


// Challenge 13: Linear search all Indices
function linearSearchAll(arr: unknown[], value: unknown): number[] {
  let valueAppearance: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    if (typeof current === typeof value) {
      if (current === value) {
        valueAppearance.push(i);
      }
    }
  }

  return valueAppearance;
}

console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7));  
console.log(linearSearchAll([5, 3, 7, 1, 4], 10));    



