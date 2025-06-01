// Challenge 1: Sum of Positives
function sumOfPositives(numbers) {
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}
console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));
