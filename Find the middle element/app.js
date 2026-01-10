// ^ it("Tests for integers", function () {
// ^     doTest([2, 3, 1], 0);
// ^     doTest([5, 10, 14], 1);
// ^ });
// ^ it("Tests for floats", function () {
// ^     doTest([2.1, 3.2, 1.4], 0);
// ^     doTest([5.9, 10.4, 14.2], 1);
// ^ });
// ^ it("Tests for negative numbers", function () {
// ^     doTest([-2, -3, -1], 0);
// ^     doTest([-5, -10, -14], 1);
// ^ });
// ^ it("Tests for mixed numbers", function () {
// ^     doTest([-2, -3.2, 1], 0);
// ^     doTest([-5.2, -10.6, 14], 0);
// ^ });


// + As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// + The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// ? gimme([5, 10, 14]) => 1
// ? gimme([2, 3, 1]) => 0

const middle = (triplet) => {
    let copied = triplet.slice();
    return triplet.indexOf(copied.sort((x, y) => x- y)[1])
};

middle([3, 1, 9]);