// ~ it("Mixed list", function () {
// ~     Test.assertDeepEquals(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]), ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
// ~ });
// ~ it("No geese", function () {
// ~     Test.assertDeepEquals(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]), ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
// ~ });
// ~ it("All geese", function () {
// ~     Test.assertDeepEquals(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]), []);
// ~ });

// +  Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// +  The geese are any strings in the following array, which is pre-populated in your solution:
// +  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// ? ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"] => ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

const geeseFilter = (list) => {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return list.filter((bird) => !geese.includes(bird));
};

geeseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]);