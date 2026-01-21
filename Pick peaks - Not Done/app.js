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



// let code = "012345";
// let times = 1;
// let newone = code.split("");
// let coded = []

// for (let i = 0; i < times; i++) {
//     // console.log(i);
//         (times > 1 ? coded : newone).forEach((item, index) => {
//             if (index % 2 !== 0) {
//                 coded.push(item)
//             }
//         })
//         (times > 1 ? coded : newone).forEach((item, index) => {
//             if (index % 2 == 0) {
//                 coded.push(item)
//             }
//         })

// }

// console.log(coded.join("").slice(-newone.length));


let array = [[2, 1, 1],
             [1, 2, 2],
             [2, 1, 1]];

// arr.forEach((item, index) => {
//     // console.log(item[0] == item[1] && item[1] == item[2] ? item[0] : "Defeat")   
//     // console.log(arr[index])
//     console.log(array[index][index]);
    
    
// })

// console.log(arr[2][0] == arr[1][1] && arr[1][1] == arr[0][2]);


// console.log(arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0])
// console.log(arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1])
// console.log(arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2])


let list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

let b = list1.filter((item) => {
    return item.continent == "Europe" && item.language == "JavaScript"
})

console.log(b);

