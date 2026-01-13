// ^   it("sumOfDifferences([1, 2, 10]", function() {
// ^     assert.strictEqual(sumOfDifferences([1, 2, 10]), 9);
// ^   });

// ^   it("sumOfDifferences([-3, -2, -1])", function() {
// ^     assert.strictEqual(sumOfDifferences([-3, -2, -1]), 2);
// ^   });


// + Your task is to sum the differences between consecutive pairs in the array in descending order.

// $ [2, 1, 10]  -->  9
// $ In descending order: [10, 2, 1]
// $ Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

const arraySum = (array) => {
    array.sort((f, g) => g - f);
    let sum = [];
    array.forEach((number, index) => !Number.isNaN(number - arr[index + 1]) ? sum.push(number - arr[index + 1]) : number);
    return sum 
};

arraySum([1, 4, 19, 8, 13]);