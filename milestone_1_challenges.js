// Challenge 1: Return Sum of two numbers
function addition(num1, num2) {
  return num1 + num2;
}
console.log(addition(3, 5));
console.log(addition(-6, 9));
// Challenge 2: Convert Minutes into Seconds
function convert(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
console.log(convert(5));
console.log(convert(2));
// Challenge 3: Perimeter of a Rectangle
function findPerimeter(length, width) {
  var perimeter = 2 * (length + width);
  return perimeter;
}
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
// Challenge 4 : Check Negative
function isNegative(num) {
  return num < 0;
}
console.log(isNegative(-23));
console.log(isNegative(55));
// Challenge 5 : Can I Drive
function canDrive(name, age) {
  if (age >= 18) {
    return "".concat(name, " is old enough to drive");
  } else {
    return "".concat(name, " is not old enough to drive yet");
  }
}
console.log(canDrive("Jane", 22));
console.log(canDrive("June", 12));
// Challenge 6: Largest Number
function findLargest(a, b, c) {
  var largest = a;
  if (b > largest) {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }
  return largest;
}
console.log(findLargest(5, 9, 3));
console.log(findLargest(-1, -5, -3));
// Challenge 7: BMI Calculator
function calculateBMI(weight, height) {
  var BMI = weight / (height * height);
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
console.log("Your BMI is - ".concat(calculateBMI(68, 1.75)));
console.log("Your BMI is -  ".concat(calculateBMI(85, 1.8)));
// Challenge 8: Greeting based on Time
function greetUser(name, hour) {
  if (hour >= 5 && hour <= 11) {
    return "Good morning, ".concat(name, "!");
  } else if (hour >= 12 && hour <= 17) {
    return "Good afternoon, ".concat(name, "!");
  } else if (hour >= 18 && hour <= 21) {
    return "Good evening, ".concat(name, "!");
  } else {
    return "Good night, ".concat(name, "!");
  }
}
console.log(greetUser("kelly", 8));
console.log(greetUser("Benson", 15));
console.log(greetUser("Hope", 20));
console.log(greetUser("Kabi", 2));
// Challenge 9: FizzBuzz
function fizzBuzzCheck(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number.toString();
  }
}
console.log(fizzBuzzCheck(3));
console.log(fizzBuzzCheck(10));
console.log(fizzBuzzCheck(15));
console.log(fizzBuzzCheck(7));
// Challenge 10: Perimeter 2
function perimeter2(letter, num) {
  if (letter === "s") {
    return num * 4;
  } else if (letter === "c") {
    return num * 6.28;
  } else {
    return "Wrong input!";
  }
}
console.log(perimeter2("s", 7));
console.log(perimeter2("c", 4));
// Challenge 11: Sum of Even Numbers
function sumEvenNumbers(n) {
  var sum = 0;
  for (var i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}
console.log(sumEvenNumbers(6));
console.log(sumEvenNumbers(10));
console.log(sumEvenNumbers(5));
// Challenge 12: Multiply by Itself
function powerUp(num, times) {
  if (times === void 0) {
    times = 0;
  }
  if (times === 0) return 1;
  var result = 1;
  for (var i = 0; i < times; i++) {
    result *= num;
  }
  return result;
}
console.log(powerUp(2, 3));
console.log(powerUp(5, 0));
console.log(powerUp(3, 4));
console.log(powerUp(0));
