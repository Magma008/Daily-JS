// # assert.strictEqual(head([5, 1]), 5);
// # assert.deepEqual(tail([1]), []);
// # assert.deepEqual(init([1, 5, 7, 9]), [1, 5, 7]);
// # assert.strictEqual(last([7, 2]), 2);


// * Haskell has some useful functions for dealing with lists:

// $ ghci
// ; GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
// ; λ head [1,2,3,4,5]
// ; 1
// ; λ tail [1,2,3,4,5]
// ; [2,3,4,5]
// ; λ init [1,2,3,4,5]
// ; [1,2,3,4]
// ; λ last [1,2,3,4,5]
// ; 5
// * Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

// @ | HEAD | <----------- TAIL ------------> |
// @ [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// @ | <----------- INIT ------------> | LAST |

// & head [x] = x
// & tail [x] = []
// & init [x] = []
// & last [x] = x

// ? head([1,2,3,4,5]); => 1
// ? tail([1,2,3,4,5]); => [2,3,4,5]

const head = (array) => {
    return array[0]
};

const tail = (array) => {
    return array.slice(1, array.length)
};

const init = (array) => {
    return array.slice(0, array.length - 1)
};

const last = (array) => {
    return array[array.length - 1]
};

head([1, 2, 4, 5, 6, 7, 12]);
tail([1, 2, 4, 5, 6, 7, 12]);
init([1, 2, 4, 5, 6, 7, 12]);
last([1, 2, 4, 5, 6, 7, 12]);



