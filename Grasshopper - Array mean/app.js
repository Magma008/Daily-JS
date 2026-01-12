// @ assert.approximately(findAverage([1]), 1, 1e-9);
// @ assert.approximately(findAverage([1, 3, 5, 7]), 4, 1e-9);

// * Find the mean (average) of a list of numbers in an array.
// * To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// ; [1, 3, 5, 7] => 4

const mean = (nums) => {
    return nums.reduce((acc, val) => acc + val, 0)
};

mean([1, 4, 6, 12, 23])