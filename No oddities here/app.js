// $ assert.deepEqual(noOdds([0, 1]), [0])
// $ assert.deepEqual(noOdds([0, 1, 2, 3]), [0, 2])

// & Write a small function that returns the values of an array that are not odd.
// & All values in the array will be integers. Return the good values in the order they are given.

// ! [0, 1, 2, 3, 4, 5, 6, 7] => [0, 2, 4, 6]

const notOdd = (array) => {
    return array.filter((number) => number % 2 === 0)
};

notOdd([12, 98, 1, 2, 34, 15]);