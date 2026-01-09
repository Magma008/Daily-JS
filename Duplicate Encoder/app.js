// ? assert.strictEqual(duplicateEncode("din"), "(((");
// ? assert.strictEqual(duplicateEncode("recede"), "()()()");
// ? assert.strictEqual(duplicateEncode("Success"), ")())())", "should ignore case");
// ? assert.strictEqual(duplicateEncode("(( @"), "))((");

// & The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// % "din"      =>  "((("
// % "recede"   =>  "()()()"
// % "Success"  =>  ")())())"
// % "(( @"     =>  "))(("

const wordEncoder = (word) => {
    let wordToArr = word.toLowerCase().split("");
    let once = [];
    let moreThanOnce = [];

    wordToArr.map((ltr) => {
        if (once.includes(ltr)) {
            moreThanOnce.push(ltr)
        } else {
            once.push(ltr)
        }
    })

    let returnArr = wordToArr.map((ltr) => (
        ltr = moreThanOnce.includes(ltr) ? ")" : "("
    ))

    return returnArr.join("")
};

wordEncoder("error")