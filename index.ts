// Challenge 1: Return the sum of two numbers
function addition(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(addition(3, 5));

//challenge 2: convert minutes into seconds
function convert(minutes: number): number {
  return minutes * 60;
}
console.log(convert(5));

// Challenge 3: Perimeter of a Rectangle
function findPerimeter(length: number, width: number): number {
  return 2 * (length + width);
}
console.log(findPerimeter(6, 7));

// Challenge 4: Check Negative
function isNegative(number: number): boolean {
  if (number < 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isNegative(-23));
console.log(isNegative(55));

// Challenge: Can I drive
function canDrive(name: string, age: number): string {
  if (age >= 18) {
    return `${name} is old enough to drive`;
  } else {
    return `${name} is not old enough to drive yet`;
  }
}
console.log(canDrive("Jane", 22));
console.log(canDrive("June", 12));

// Challenge 6
function findLargest(a: number, b: number, c: number): number {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(findLargest(5, 9, 3));

// Challenge 7
function calculateBMI(weight: number, height: number): string {
  let BMI = weight / (height * height);
  if (BMI < 18.5) {
    return "Underweight";
  } else if (BMI >= 18.5 && BMI < 24.9) {
    return "Normal weight";
  } else if (BMI >= 25 && BMI < 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
console.log(calculateBMI(68, 1.75));
console.log(calculateBMI(85, 1.8));

// Challenge 8
function greetUser(name: string, hour: number): string {
  if (hour >= 5 && hour <= 11) {
    return `Good morning, ${name}!`;
  } else if (hour >= 12 && hour <= 17) {
    return `Good afternoon, ${name}!`;
  } else if (hour >= 18 && hour <= 21) {
    return `Good evening, ${name}!`;
  } else {
    return `Good night, ${name}1`;
  }
}
console.log(greetUser("Alice", 9));

// Challenge 9
function fizzBuzzCheck(number: number): number | string {
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  } else if (number % 3 == 0) {
    return "Fizz";
  } else if (number % 5 == 0) {
    return "Buzz";
  } else {
    return number;
  }
}
console.log(fizzBuzzCheck(3));
console.log(fizzBuzzCheck(10));
console.log(fizzBuzzCheck(15));
console.log(fizzBuzzCheck(7));

// Challenge 10
function perimeter(letter: string, number: number): number {
  let letter1 = "s";
  let letter2 = "c";
  if (letter1 === "s") {
    return number * 4;
  } else if (letter2 === "c") {
    return number * 6.28;
  } else {
    return number;
  }
}
console.log(perimeter("s", 7));
console.log(perimeter("c", 4));

// Challenge 11
function sumEvenNumbers(n: number): number {
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumEvenNumbers(6));

// Challenge 12
function powerUp(num: number, times: number) {
  let power = num ** times;
  return power;
}

console.log(powerUp(2, 3));
console.log(powerUp(5, 0));

// Challenge 13
function factorial(n: number) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
}
console.log(factorial(4));

// Challenge 14
function sumMultiples(n: number, divisor: number) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % divisor === 0) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sumMultiples(10, 2));

// Challenge 15
function sumDigits(num: number): number {
  let sum = 0;
  for (let i = 1; num > 0; num = Math.floor(num / 10)) {
    sum = sum + (num % 10);
  }
  return sum;
}
console.log(sumDigits(234));
