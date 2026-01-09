// $ assert.deepEqual(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);

// * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// @ moveZeros([false,1,0,1,2,0,1,3,"a"]) => returns[false,1,1,2,1,3,"a",0,0]

const zeroToEnd = (array) => {
    let newArray = [];
    let zeros = [];

    array.map((item) => {
        item !== 0 ? newArray.push(item) : zeros.push(item)
    });

    return newArray.concat(zeros)
};

zeroToEnd([false,1,0,1,2,0,1,3,"a"]);