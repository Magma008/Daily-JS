// $ assert.deepEqual(capitals('CodEWaRs'), [0, 3, 4, 6], "Input: \"CodEWaRs\"");
// $ assert.deepEqual(capitals('aAbB'), [1, 3], "Input: \"aAbB\"");
// $ assert.deepEqual(capitals('AAA'), [0, 1, 2], "Input: \"AAA\"");
// $ assert.deepEqual(capitals(''), [], "Input: \"\"");


// & Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// @ "CodEWaRs" --> [0,3,4,6]

const capitalSorter = (word) => {
    let rtr = [];
    word.split("").map((item, index) => item === item.toUpperCase() ? rtr.push(index) : item)
    return rtr
};

capitalSorter("EnUmeRatiOn")