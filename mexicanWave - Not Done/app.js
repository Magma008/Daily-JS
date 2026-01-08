// ; let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
// ; assert.deepEqual(wave("hello"), result, "Should return: '" + result + "'");

// ; result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
// ; assert.deepEqual(wave("codewars"), result, "Should return: '" + result + "'");

// ; result = [];
// ; assert.deepEqual(wave(""), result, "Should return: '" + result + "'");

// ; result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
// ; assert.deepEqual(wave("two words"), result, "Should return: '" + result + "'");

// ; result = [" Gap ", " gAp ", " gaP "];
// ; assert.deepEqual(wave(" gap "), result, "Should return: '" + result + "'");


// + In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return an array of strings where an uppercase letter is a person standing up.


// ? "hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// ? " s p a c e s " => [" S p a c e s ", " s P a c e s ", " s p A c e s ", " s p a C e s ", " s p a c E s ", " s p a c e S "]

// let word = "hello"
// let wordArr = word.split("")
// let arr = [];

// for (let i = 0; i < wordArr.length; i++) {
//     arr.push(word)
//     arr.push(wordArr[i] = wordArr[i].toUpperCase());
//     console.log(`${word.slice(0, i - 1).toUpperCase()} ${word[i].toUpperCase()}`);
    

// }

// console.log(arr);

// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// console.log(arr)
// console.log(arr.sort((x, y) => x % 2 == 0 ? x : x - y));