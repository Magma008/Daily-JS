// $ assert.strictEqual(arr.slice().numberOfOccurrences(0), 1, `Incorrect answer for 0, arr = [0, 1, 2, 2, 3]`);
// $ assert.strictEqual(arr.slice().numberOfOccurrences(4), 0, `Incorrect answer for 4, arr = [0, 1, 2, 2, 3]`);
// $ assert.strictEqual(arr.slice().numberOfOccurrences(2), 2, `Incorrect answer for 2, arr = [0, 1, 2, 2, 3]`);
// $ assert.strictEqual(arr.slice().numberOfOccurrences(3), 1, `Incorrect answer for 3, arr = [0, 1, 2, 2, 3]`);


// + Write a function that returns the number of occurrences of an element in an array.
// + This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object.

// ? var arr = [0, 1, 2, 2, 3];
// ? arr.numberOfOccurrences(0) === 1;
// ? arr.numberOfOccurrences(4) === 0;
// ? arr.numberOfOccurrences(2) === 2;
// ? arr.numberOfOccurrences(3) === 1;

Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
  value : function numberOfOccurrences(element) {
    return this.filter((item) => item == element).length
  }
});

let array = [0, 1, 2, 2, 3, 6, 10];
array.numberOfOccurrences(2);