// # it("Test 1", function () {
// #     Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]), ["I", "To", "Beg", "Life"]);
// # });
// # it("Test 2", function () {
// #     Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]), ["", "Pizza", "Brains", "Moderately"]);
// # });
// # it("Test 3", function () {
// #     Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]), ["Short", "Longer", "Longest"]);
// # });


// * Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// $ ["Telescopes", "Glasses", "Eyes", "Monocles"] => ["Eyes", "Glasses", "Monocles", "Telescopes"]

const sortStr = (array) => {
    return array.sort((x, y) => x.length - y.length)
};

sortStr(["", "Moderately", "Brains", "Pizza", "Clash"]);