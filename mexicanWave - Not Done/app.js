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


// let arr = [[1, 2, 3, 4, 5, 6],
// [20, 21, 22, 23, 24, 7],
// [19, 32, 33, 34, 25, 8], 
// [18, 31, 36, 35, 26, 9], 
// [17, 30, 29, 28, 27, 10], 
// [16, 15, 14, 13, 12, 11]]

// console.log(arr[0]  );

// for (let i = 1; i < arr.length - 1; i++) {
//     console.log(arr[i][arr[i].length - 1]);    
//     console.log(arr[i][0]);   
//     console.log(arr[i][arr[i].length - 2]);


// }

// console.log(arr[arr.length - 1].reverse());

// console.log(arr[1].slice(1, arr[1].length - 1));