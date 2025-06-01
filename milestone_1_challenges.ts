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


