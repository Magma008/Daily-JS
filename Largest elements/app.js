// @ doTest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [9, 10]);
// @ doTest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], []);
// @ doTest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5], [-1, 0]);
// @ doTest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5], [5, 5, 5]);
// @ doTest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5], [3, 5, 9, 13, 22, 50, 63]);
// @ doTest(0, [1, 2, 3, 4, 8, 7, 6, 5], []);


// * Write a program that outputs the top n elements from a list.

// % k = 2; list = [7, 6, 5, 4, 3, 2, 1] ==> [6, 7]

const largest = (number, array) => {
    array.sort((a, b) => a- b);
    return array.slice(-number)
};

largest(2, [-102, -16, -1, -2, -367, -9, 3, 4, 1, 9]);







