// Challenge 1: Return Sum of two numbers
function addition (num1: number, num2: number) {
    return num1 + num2;
}
console.log(addition(3, 5));
console.log(addition(-6, 9));

// Challenge 2: Convert Minutes into Seconds
function convert (minutes: number):number {
    const seconds = minutes * 60;
    return seconds;
}
console.log(convert(5));
console.log(convert(2));

// Challenge 3: Perimeter of a Rectangle
function findPerimeter(length:number, width:number):number {
    const perimeter = 2 * (length + width);
    return perimeter;
}
console.log(findPerimeter(6,7));
console.log(findPerimeter(20, 10));

// Challenge 4 : Check Negative
function isNegative(num: number): boolean {
    return num < 0;
}
console.log(isNegative(-23));
console.log(isNegative(55));

// Challenge 5 : Can I Drive
function canDrive(name: string, age: number): string {
    if (age >= 18) {
        return `${name} is old enough to drive`;
    } else {
        return `${name} is not old enough to drive yet`;
    }
}
console.log(canDrive("Jane", 22));
console.log(canDrive("June", 12));

// Challenge 6: Largest Number
function findLargest(a: number, b: number, c: number):number {
    let largest = a;

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
    function calculateBMI(weight: number, height: number): string {
        const BMI = weight / (height * height);
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
console.log(`Your BMI is - ${calculateBMI(68, 1.75)}`);
console.log(`Your BMI is -  ${calculateBMI(85, 1.8)}`);

// Challenge 8: Greeting based on Time
    function greetUser(name: string, hour: number):string {
        if (hour >= 5 && hour <= 11) {
        return `Good morning, ${name}!`;
    } else if (hour >= 12 && hour <= 17) {
        return `Good afternoon, ${name}!`;
    } else if (hour >= 18 && hour <= 21) {
        return `Good evening, ${name}!`;
    } else {
        return `Good night, ${name}!`;
    } 
}
console.log(greetUser("kelly", 8));
console.log(greetUser("Benson", 15));
console.log(greetUser("Hope", 20));
console.log(greetUser("Kabi", 2));