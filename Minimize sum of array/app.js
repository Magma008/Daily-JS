// ; Test.assertEquals(minSum([5, 4, 2, 3]), 22);
// ; Test.assertEquals(minSum([12, 6, 10, 26, 3, 24]), 342);
// ; Test.assertEquals(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74);


// & Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product.
// & Array/list will contain positives only .
// & Array/list will always have even size

// @ minSum({5,4,2,3}) ==> return (22) 
// @ minSum({12,6,10,26,3,24}) ==> return (342)
// @ minSum({9,2,8,7,5,4,0,6}) ==> return (74)

const minimizer = (array) => {
    let sum = [];
    array.sort((x, y) => x - y);
    for (let i = 0; i < array.length / 2; i++) {
        sum.push(array[i] * array[(array.length - 1) - i]);
    }
    return sum.reduce((acc, val) => acc + val, 0);
};

minimizer([9, 2, 8, 7, 5, 4, 0, 6]);