// $ doTest([1, 3, 9, 4], 'no');
// $ doTest([4, 3, 1, 9], 'no');
// $ doTest([1, 2], 'yes, ascending');
// $ doTest([2, 1], 'yes, descending');
// $ doTest([1, 2, 3, 4], 'yes, ascending');
// $ doTest([1, 1, 2, 3], 'yes, ascending');
// $ doTest([1, 2, 3, 3], 'yes, ascending');
// $ doTest([4, 3, 2, 1], 'yes, descending');
// $ doTest([3, 3, 2, 1], 'yes, descending');
// $ doTest([3, 2, 1, 1], 'yes, descending');


// * Complete the method which accepts an array of integers, and returns one of the following:
// + "yes, ascending" - if the numbers in the array are sorted in an ascending order
// + "yes, descending" - if the numbers in the array are sorted in a descending order
// + "no" - otherwise


// * The order does not have to be strict: a sorted array can contain consecutive duplicates, e.g. [1, 1, 2, 3] is sorted in ascending order.
// * It is guaranteed that there will always be a unique valid answer.More precisely:
// & there will be no arrays with less than 2 elements
// & there will be no arrays where all elements are equal

// ! [1, 2, 4, 8] => "yes, ascending"

const sorter = (array) => {
    let asc = Array.from(array).sort((a, b) => a- b);
    let des = Array.from(array).sort((x, y) => y - x)

    if (array.every((item, index) => item == des[index])) {
        return "yes, descending"
    } else if (array.every((item, index) => item == asc[index])) {
        return "yes, ascending"
    } else {
        return "no"
    }
};

sorter([1, 2, 4, 6, 10]);





