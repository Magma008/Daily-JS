// @ assert.strictEqual(maxTriSum([3, 2, 6, 8, 2, 3]), 17);
// @ assert.strictEqual(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]), 32);
// @ assert.strictEqual(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]), 18);
// @ assert.strictEqual(maxTriSum([-3, -27, -4, -2, -27, -2]), -9);
// @ assert.strictEqual(maxTriSum([-14, -12, -7, -42, -809, -14, -12]), -33);
// @ assert.strictEqual(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]), 232);
// @ assert.strictEqual(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]), 41);
// @ assert.strictEqual(maxTriSum([-2, 0, 2]), 0);
// @ assert.strictEqual(maxTriSum([-2, -4, 0, -9, 2]), 0);
// @ assert.strictEqual(maxTriSum([-5, -1, -9, 0, 2]), 1);

// + Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
// + Array/list size is at least 3 .
// + Array/list numbers could be a mixture of positives , negatives and zeros .
// + Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

// | 1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
// | 2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
// | 3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)

const maxTriplet = (array) => {
    let uniques = [];
    array.forEach((number) => !uniques.includes(number) && uniques.push(number));
    uniques.sort((x, y) => x - y);
    return uniques.slice(-3).reduce((acc, val) => acc + val, 0)
};

maxTriplet([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]);







