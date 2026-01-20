// | assert.strictEqual(arrayMadness([4, 5, 6], [1, 2, 3]), true);
// | assert.strictEqual(arrayMadness([5, 6, 7], [4, 5, 6]), false);
// | assert.strictEqual(arrayMadness([4, 5, 6], [3, 4, 5]), false);
// | assert.strictEqual(arrayMadness([3, 4, 5], [2, 3, 4]), false);
// | assert.strictEqual(arrayMadness([2, 3, 4], [1, 2, 3]), false);
// | assert.strictEqual(arrayMadness([1, 2, 3], [0, 1, 2]), true);
// | assert.strictEqual(arrayMadness([5, 3, 2, 4, 1], [15]), false);
// | assert.strictEqual(arrayMadness([2, 5, 3, 4, 1], [3, 3, 3, 3, 3]), false);
// | assert.strictEqual(arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1]), false);
// | assert.strictEqual(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1]), true);
// | assert.strictEqual(arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13]), false);


// & Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// ? arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

const bigger = (squares, cubes) => {
    return squares.map((sq) => sq ** 2)
                  .reduce((acc, val) => acc + val, 0) > cubes.map((cb) => Math.pow(cb, 3))
                                                             .reduce((acc, val) => acc + val, 0)
};

bigger([1, 2, 3], [0, 1, 2]);