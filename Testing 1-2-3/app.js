// ; assert.deepEqual(number([]), [], 'Empty array should return empty array');
// ; assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');


// * Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// * Write a function which takes a list of strings and returns each line prepended by the correct number.
// * The numbering starts at 1. The format is n: string.Notice the colon and space in between.

// $ [] --> []
// $ ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


const indexing = (array) => {
    if (!array.length) {
        return [];
    } else {
        let newArr = array.map((item, index) => (
            item = `${index}: ${item}`
        ))
        return newArr
    }
};

indexing(["A", "B", "C", "A", "D"])