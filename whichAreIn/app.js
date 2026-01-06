// $ a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// $ a1 = ["xyz", "live", "strong"]
// $ assert.sameOrderedMembers(inArray(a1, a2), ["live", "strong"])

// $ a1 = ["live", "strong", "arp"]
// $ assert.sameOrderedMembers(inArray(a1, a2), ["arp", "live", "strong"])

// $ a1 = ["tarp", "mice", "bull"]
// $ assert.sameOrderedMembers(inArray(a1, a2), [])

// * Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// % Example 1:
// % a1 = ["arp", "live", "strong"]

// % a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// % returns ["arp", "live", "strong"]

// % Example 2:
// % a1 = ["tarp", "mice", "bull"]

// % a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// % returns []

const arrSort = (array1, array2) => {
    let returnArr = [];

    array1.map((item) => {
        array2.map((word) => {
            if (word.includes(item)) {
                !returnArr.includes(item) ? returnArr.push(item) : item
            }
        })
    });

    return returnArr.sort();
};

arrSort(["strong", "arp", "xyz"], ["lively", "alive", "harp", "sharp", "armstrong"])


