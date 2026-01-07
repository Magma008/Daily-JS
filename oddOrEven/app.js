// @ assert.strictEqual(oddOrEven([0]), 'even')
// @ assert.strictEqual(oddOrEven([1]), 'odd')
// @ assert.strictEqual(oddOrEven([]), 'even')

// + Given a list of integers, determine whether the sum of its elements is odd or even.
// + Give your answer as a string matching "odd" or "even".
// + If the input array is empty consider it as: [0](array with a zero).

// $ Input: [0]
// $ Output: "even"

// $ Input: [0, 1, 4]
// $ Output: "odd"

// $ Input: [0, -1, -5]
// $ Output: "even"

const oddOrEven = (array) => {
    if (!array.length) {
        return "Even"
    } else {
        return ( (array.reduce((acc, val) => acc + val, 0)) % 2 === 0 ? "Even" : "Odd" )
    }
};

oddOrEven([-1023, -1, 3, 1]);