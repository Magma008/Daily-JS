// # assert.deepEqual(sortme(['one', 'two', 'three']), ["one", "three", "two"])


// * Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

// ^ ["banana", "apple", "cherry"] => ["apple", "banana", "cherry"]

const arraySorter = (array) => {
    return array.sort();
};

arraySorter(['one', 'two', 'three']);