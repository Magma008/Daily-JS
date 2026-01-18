// # assert.strictEqual(adjacentElementsProduct([5, 8]), 40);
// # assert.strictEqual(adjacentElementsProduct([1, 2, 3]), 6);
// # assert.strictEqual(adjacentElementsProduct([1, 5, 10, 9]), 90);
// # assert.strictEqual(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
// # assert.strictEqual(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);

// * Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.


// $ [1, 2, 3] => 6
// $ [9, 5, 10, 2, 24, -1, -48] => 50
// $ [-23, 4, -5, 99, -27, 329, -2, 7, -921] => -14

const biggest = (array) => {
    let products = array.map((num, index) => num * array[index + 1]).slice(0, array.length - 1);
    return Math.max(...products);
};

biggest([9, 5, 10, 2, 24, -1, -48]);