// Challenge 1 Sum of positives
function sumOfPositives(arr: number[]):number {
    let sum = 0;                      //creates a var named sum and sets it to 0
    for (let i=0; i < arr.length; i++) { //for loop that goes through the array one item at a time. //i starts at 0(first index). //i<arr.length(keep going as long as the i is less than the array's length). //i++(increases i by 1 each time- move to the next item)
        if(arr[i] > 0){             //checks if the current no (arr[i]) is positive- greater than 0.
            sum = sum + arr[i];     //If its positive we add it to our sum
        }
    }
    return sum;                  //After going through the whole array, we return the final sum
}
console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));

// Challenge 2 Finding maximum value
function findMax(arr: number[]): number {
    let maxNo = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > maxNo) {
            maxNo=arr[i]
        }
    }
    return maxNo;
}
console.log(findMax([3, 7, 2, 9, 5]));

// Challenge 3 Election winner
interface candidates{
    name: string;
    votes: number;
}
function findWinner(candidates: candidates[]) {
    let candidateobj= candidates[0];
    for(let i = 0; i<candidates.length; i++) {
        if(candidates[i].votes > candidateobj.votes) {
            candidateobj=candidates[i];
        }
    } 
    return candidateobj;
}

console.log(findWinner([{name: "Alice", votes: 50},{ name: "Bob", votes: 75 }]))
