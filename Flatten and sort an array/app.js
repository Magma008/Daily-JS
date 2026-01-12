// ! assert.deepEqual(flattenAndSort([]), []);
// ! assert.deepEqual(flattenAndSort([[], []]), []);
// ! assert.deepEqual(flattenAndSort([[], [1]]), [1]);
// ! assert.deepEqual(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// ! assert.deepEqual(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);


// + Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order. Please, keep in mind, that JavaScript is by default sorting objects alphabetically.

// @ [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] => [1, 2, 3, 4, 5, 6, 7, 8, 9]

const flatten = (array) => {
    return array.flat().sort((x, y) => x - y)
};

flatten([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]);