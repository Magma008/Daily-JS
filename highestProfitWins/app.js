// @ [[1, 2, 3, 4, 5], [1, 5]],
// @ [[2334454, 5], [5, 2334454]],
// @ [[5], [5, 5]]

// * Write a function that returns both the minimum and maximum number of the given list/array.

// % [1,2,3,4,5] --> [1,5]
// % [2334454,5] --> [5,2334454]
// % [1]         --> [1,1]

const numSorter = (array) => {
    let returnArr = array.sort((x,y) => x - y);
    return [(returnArr[0]), (returnArr[returnArr.length - 1])]
};

numSorter([2334454,5, 9, 0, 12, -1]);