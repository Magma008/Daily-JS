// ? assert.deepEqual(rowWeights([80]), [80, 0]);
// ? assert.deepEqual(rowWeights([100, 50]), [100, 50]);
// ? assert.deepEqual(rowWeights([50, 60, 70, 80]), [120, 140]);
// ? assert.deepEqual(rowWeights([13, 27, 49]), [62, 27]);
// ? assert.deepEqual(rowWeights([70, 58, 75, 34, 91]), [236, 92]);
// ? assert.deepEqual(rowWeights([29, 83, 67, 53, 19, 28, 96]), [211, 164]);
// ? assert.deepEqual(rowWeights([100, 51, 50, 100]), [150, 151]);
// ? assert.deepEqual(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]), [207, 235]);

// + Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// + Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.

// ! [13, 27, 49] => [62, 27]
// ! [50, 60, 70, 80] => [120, 140]

console.log([arr.filter((num, index) => index % 2 == 0).reduce((acc, val) => acc + val, 0), arr.filter((num, index) => index % 2 != 0).reduce((acc, val) => acc + val, 0)]);

const rowWght = (array) => {
    return [ (array.filter((item, index) => index % 2 == 0).reduce((acc, val) => acc + val, 0)), array.filter((item, index) => index % 2 != 0).reduce((acc, val) => acc + val, 0) ]
}

rowWght([50, 60, 70, 80]);