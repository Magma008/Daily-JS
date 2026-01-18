// ^ testing(partlist(["I", "wish", "I", "hadn't", "come"]),
// ^     [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
// ^ testing(partlist(["cdIw", "tzIy", "xDu", "rThG"]),
// ^     [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])
// ^ testing(partlist(["vJQ", "anj", "mQDq", "sOZ"]),
// ^     [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])


// + Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// + Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// + Each part will be in a string
// + Elements of a pair must be in the same order as in the original array.

// ! a = ["az", "toto", "picaro", "zone", "kiwi"] => [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

const partList = (arrays) => {
    let result = [];
    for (let i = 0; i < arrays.length; i++) {
        result.push([ arrays.slice(0, i + 1).join(" "), arrays.slice(i + 1, arrays.length).join(" ") ])
    };
    result.pop();
    return result
};

partList(["Oh", "Oh", "wish", "I", "wish", "I", "knew", "knew"]);





