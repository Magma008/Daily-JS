// % assert.strictEqual(findUniq([1, 0, 0]), 1);
// % assert.strictEqual(findUniq([0, 1, 0]), 1);
// % assert.strictEqual(findUniq([0, 0, 1]), 1);
// % assert.strictEqual(findUniq([1, 1, 1, 2, 1, 1]), 2);
// % assert.strictEqual(findUniq([1, 1, 2, 1, 1]), 2);
// % assert.strictEqual(findUniq([3, 10, 3, 3, 3]), 10);

// & There is an array with some numbers. All numbers are equal except for one. Try to find it! It’s guaranteed that array contains at least 3 numbers.

// ? findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// ? findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55


const findUnique = (array) => {
    let nonUniques = [];
    let unique;

    if (array[0] === array[1]) {
        nonUniques.push(arr[0]);

        array.map((item) => {
            nonUniques.includes(item) ? nonUniques.push(item) : unique = item
        })
    } else {
        unique = (array[0] === array[2] ? array[1] : array[0])
    }

    return unique
};

findUnique([0, 0, 4, 0, 0]);