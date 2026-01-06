// assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
// assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
// assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");

// & Write a function that accepts an array of 10 integers(between 0 and 9), that returns a string of those numbers in the form of a phone number.

// * createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const createPhoneNumber = (arr) => {
    return `(${arr.slice(0, 3).join("")}) ${arr.slice(3, 6).join("")}-${arr.slice(6, 10).join("")}`
}

createPhoneNumber(array)