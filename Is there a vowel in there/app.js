// ! assert.deepEqual(actual, expected, `isVow(${JSON.stringify(input)}) returned an incorrect answer\n`);


// * Given an array of numbers, check if any of the numbers are the character codes for lower case vowels(a, e, i, o, u).
// * If they are, change the array value to a string of that vowel.

// % input [100,100,116,105,117,121]=>[100,100,116,"i","u",121]

const vowelTurner = (array) => {
    let vowels = [["a", 97], ["e", 101], ["i", 105], ["o", 111], ["u", 117]];
    vowels.map((item) => {
        return array.join(" ").includes(item[1]) ? array = array.join(" ").replaceAll(item[1], item[0]).split(" ") : item
    });
    return array.map((char) => (
        /\d/.test(char) ? char = Number(char) : char
    ));
};

vowelTurner([100, 100, 116, 105, 117, 121]);







