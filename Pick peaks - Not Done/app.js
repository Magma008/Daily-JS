// let arr = [3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]
// let mpty = []
// let peak;

// // let mapped = arr.filter((num, index) => num > arr[index - 1] && num > arr[index + 1])

// let mapped2 = arr.map((num, index) => {
//     if (num > arr[index - 1] && num > arr[index + 1]) {
//         mpty.push(num)
//     } else {
//         if (num > arr[index - 1]) {
//             peak = num
//         } else if (peak > arr[index + 1]) {
//             mpty.push(peak)
//         } else if (!peak > arr[index + 1]) {
//             peak = "";
//         }

//     }
// })

// console.log(mpty);



let code = "012345";
let times = 1;
let newone = code.split("");
let coded = []

for (let i = 0; i < times; i++) {
    // console.log(i);
        (times > 1 ? coded : newone).forEach((item, index) => {
            if (index % 2 !== 0) {
                coded.push(item)
            }
        })
        (times > 1 ? coded : newone).forEach((item, index) => {
            if (index % 2 == 0) {
                coded.push(item)
            }
        })

}

console.log(coded.join("").slice(-newone.length));