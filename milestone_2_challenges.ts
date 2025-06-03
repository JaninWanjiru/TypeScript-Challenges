// Challenge 1: Sum of Positives
function sumOfPositives(arr:number[]): number{
  let sum = 0;
  for(let i=0; i<arr.length; i++ ) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }
  return sum
}
console.log(sumOfPositives([1, -4, 7, 12])); 
console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));   


// Challenge 2: Find Max Value
function findMax(arr:number[]): number {
  let maxNo = 0;
  for(let i=0; i<arr.length; i++) {
    if(arr[i] > maxNo) {
      maxNo=arr[i];
    }
  }
  return maxNo
}
console.log(findMax([2, 10, 15, 9, 3])); 


// Challenge 3: Election Winner
type candidates={
    name: string
    votes: number
}

function findWinner(arr: candidates[]): candidates| unknown {
  let highVote = 0;
  let winner;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].votes > highVote){
      winner = arr[i];
      highVote = arr[i].votes;
    }
  }
  return winner;
}
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 }
];

console.log(findWinner(candidates)); 


// Challenge 4: Longest Word
function findLongestWord(arr: string[]):string {
  let longest = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i]; 
    }
  }
  return longest;
}
const list = ["apple", "banana", "grapefruit", "pear", "plum"];

console.log(findLongestWord(list));


// Challenge 5: Count Properties
function countProperties(obj: object):number {
  const keys = Object.keys(obj);
  let count = keys.length;
  return count
}
const objectExample = { name: "Alice", age: 25, city: "Paris" };

console.log(countProperties(objectExample));


// Challenge 6:Filter by Length
function filterByLength(arr: string[], minLength:number) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= minLength) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));

// Challenge 7: Sum of Even Numbers
function sumEvenNumbers2(myArray: number[]):number{
  let sumOfValues = 0;
  for(let i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 === 0){
      sumOfValues = sumOfValues + myArray[i];
    }
  }
  return sumOfValues;
}
console.log(sumEvenNumbers2([1, 2, 3, 4, 5, 6]));


// Challenge 8: Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(arr:number[]){
  let evenSum=0
  let oddSum=0

  for(let i=0; i<arr.length; i++) {
    if(arr[i] % 2===0){
      evenSum = evenSum+arr[i];
    } else {
      oddSum = oddSum +arr[i];
    }
  }
  return evenSum-oddSum;
}
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));


// Challenge 9: Count Truthy
function countTruthy(object: object) {
  let count = 0;
  let properties = Object.keys(object);
  for (let i = 0; i < properties.length; i++){
    if(properties[i] == "null" || properties[i] == "0" || properties[i] == "false" || properties[i] == ""){
      continue
    } else {
      count++;
    }
  }
  return count;
}
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }))


// Challenge 10: Average of Numbers
function average(array: number[]) {
  let sum = 0
  let numberOfItems = array.length;
    if(numberOfItems === 0) {
        return 0;
    } else {
        for(let i = 0; i < numberOfItems; i++) {
            sum += array[i];
        }
    }
    
    return sum / numberOfItems;
}
console.log(average([2, 4, 6, 8]));
console.log(average([]));


// Challenge 11: Linear Search
function linearSearch(array: number[], value:number) {
let result = 0
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            result=i;
            return result;
        } else {
          result = -1;
        }
    }
    return result
}
console.log(linearSearch([5, 3, 7, 1, 4], 7)); 
console.log(linearSearch([5, 3, 7, 1, 4], 10));


// Challenge 12: Reverse Linear Search
function reverseLinearSearch(array: number[], value: number){
  let lastOccurrence = -1;
  for (let i = 0; i < array.length; i++){
    if (array[i] === value){
      lastOccurrence = i; 
    }
  }
  return lastOccurrence;
}
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7))
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10))


// Challenge 13: Linear Search All Indices
function linearSearchAll(array: number[], value:number) {
  let valueAppearance = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] == value){
      valueAppearance.push(i);
    }
  }
  return valueAppearance;
}
console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7))
console.log(linearSearchAll([5, 3, 7, 1, 4], 10))


// Challenge 14: Count Occurrences
function countOccurences(arr: string[]): {[key: string]: number}{
  let object : { [key: string]: number} = {};

    for(let i = 0; i < arr.length; i++) {
        let item  = arr[i];
        if(object[item]) { //object[arr[i]] - checks if the value is a key in the object 
            object[item] += 1;
        } else {
            object[item] = 1;
        }
    }
    return object;
}

console.log(countOccurences(["apple", "banana", "apple", "orange", "banana", "apple"]))


// Challenge 15: Remove Duplicates
function removeDuplicates(array: number[]): number[]{
    let newArray: number[] = [];
    for (let i = 0; i < array.length; i++) {
      if (newArray.indexOf(array[i]) === -1) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]))


// Challenge 16: Most Frequent
function mostFrequent(array: (number| string)[]) {
  let occurrences :{[key:string]: number}= {};
    let count = 0;
    let mostAppearance;

    for (let i = 0; i < array.length; i++) {
      let item = array[i]

        if (occurrences[item]) {
            occurrences[item] += 1;
        } else {
            occurrences[item] = 1;
        }

        if (occurrences[item] > count) {
            count = occurrences[item];
            mostAppearance = item;
        }
    }
    return mostAppearance;
}
console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]))
console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]))