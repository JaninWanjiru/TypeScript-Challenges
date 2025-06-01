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
    }
    else {
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
