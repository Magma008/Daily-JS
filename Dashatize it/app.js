// # doTest(0, "0");
// # doTest(-1, "1");
// # doTest(-28369, "28-3-6-9");
// # doTest(274, "2-7-4");
// # doTest(5311, "5-3-1-1");
// # doTest(86320, "86-3-20");
// # doTest(974302, "9-7-4-3-02");


// * Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// ^ 274 -> '2-7-4'
// ^ 6815 -> '68-1-5'

let num = 974302;
let spilled = String(974302).split("");

console.log(spilled);

let ns = spilled.map((item, index) => {
    return item = item % 2 != 0 && spilled[index] ? `${item}-` : item
})

console.log(ns.join(""));
