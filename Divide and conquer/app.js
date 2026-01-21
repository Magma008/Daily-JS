// ^ assert.strictEqual(divCon([9, 3, '7', '3']), 2);
// ^ assert.strictEqual(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
// ^ assert.strictEqual(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13); 


// * Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
// * Return as a number.

// % ['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'] =>  13

const sumUp = (numbers) => {
    let nums = numbers.filter((num) => Number.isInteger(num)).reduce((acc, val) => acc + val, 0);
    let str = numbers.filter((num) => typeof(num) === "string").reduce((acc, val) => Number(acc) + Number(val), 0);
    return nums - str
};

sumUp(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']);