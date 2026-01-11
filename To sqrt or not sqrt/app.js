// ? var input = [4, 3, 9, 7, 2, 1];
// ? var expected = [2, 9, 3, 49, 4, 1];
// ? Test.assertSimilar(squareOrSquareRoot(input), expected);

// ? input = [100, 101, 5, 5, 1, 1];
// ? expected = [10, 10201, 25, 25, 1, 1];
// ? Test.assertSimilar(squareOrSquareRoot(input), expected);

// ? input = [1, 2, 3, 4, 5, 6];
// ? expected = [1, 4, 9, 2, 25, 36];
// ? Test.assertSimilar(squareOrSquareRoot(input), expected);

// & Write a method, that will get an integer array as parameter and will process every number from this array.
// & Return a new array with processing every number of the input-array like this:
// & If the number has an integer square root, take this, otherwise square the number.

// ! [4,3,9,7,2,1] -> [2,9,3,49,4,1]

const sqrtDecider = (nums) => {
    return nums.map( (num) => num = ( Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : Math.pow(num, 2) ) )
};

sqrtDecider([1, 3, 5, 2, 8, 16, 9])