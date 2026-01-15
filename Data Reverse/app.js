// % const data1 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
// % const data2 = [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
// % assert.deepEqual(dataReverse(data1), data2)
// % const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]
// % const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
// % assert.deepEqual(dataReverse(data3), data4)


// & A stream of data is received and needs to be reversed. Each segment is 8 bits long, meaning the order of these segments needs to be reversed. The total number of bits will always be a multiple of 8.

// ? 11111111  00000000  00001111  10101010  => 10101010  00001111  00000000  11111111
// ?  (byte4)   (byte3)   (byte2)   (byte1)     (byte1)   (byte2)   (byte3)   (byte4)

const dataReverse = (data) => {
    let reversed = [];
    for (let i = data.length; i > 0; i -= 8) {
        reversed.push(data.slice(i - 8, i));
    }
    return reversed.flat()
};

dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]);





