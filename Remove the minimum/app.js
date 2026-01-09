// ! assert.deepEqual(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
// ! assert.deepEqual(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
// ! assert.deepEqual(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
// ! assert.deepEqual(removeSmallest([]), [], "Wrong result for []");

// & Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.
// & Don't change the order of the elements that are left.

// ? Input: [1,2,3,4,5], output = [2,3,4,5]
// ? Input: [5,3,2,1,4], output = [5,3,2,4]
// ? Input: [2,2,1,2,1], output = [2,2,2,1]

const removeSmallest = (array) => {
    if (!array.length || array.length == 1) {
        return []
    } else {
        let returnArray = array.slice();
        returnArray.splice(returnArray.indexOf(Math.min(...returnArray)), 1)
        return returnArray
    }
};

removeSmallest([5, 3, 2, 1, 4, 1])