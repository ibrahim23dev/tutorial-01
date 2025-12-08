//Probles01

// partan * pyramid created by @safak
                //  ******
                //   ****
                //    **
                //     *
               
// function partanPyramid(n) {
//     for (let i = 0; i < n; i++) {
//         let str = '';
//         for (let j = 0; j < i; j++) {
//             str += ' ';
//         }
//         for (let k = 0; k < n - i; k++) {
//             str += '*';
//         }
//         console.log(str);
//     }
// }

// partanPyramid(6);


// function invertedPyramid(n) {
//     for (let i = 0; i < n; i++) {
//         let str = '';
//         for (let j = 0; j < n - i - 1; j++) {
//             str += ' ';
//         }
//         for (let k = 0; k <= i; k++) {
//             str += '*';
//         }
//         console.log(str);
//     }
// }

// invertedPyramid(6);


// function diamondPattern(n) {
//     // Upper part
//     for (let i = 0; i < n; i++) {
//         let str = '';
//         for (let j = 0; j < n - i - 1; j++) {
//             str += ' ';
//         }
//         for (let k = 0; k < 2 * i + 1; k++) {
//             str += '*';
//         }
//         console.log(str);
//     }
//     // Lower part
//     for (let i = n - 2; i >= 0; i--) {
//         let str = '';
//         for (let j = 0; j < n - i - 1; j++) {
//             str += ' ';
//         }
//         for (let k = 0; k < 2 * i + 1; k++) {
//             str += '*';
//         }
//         console.log(str);
//     }
// }
// diamondPattern(5);


// function hollowSquare(n) {
//     for (let i = 0; i < n; i++) {
//         let str = '';
//         for (let j = 0; j < n; j++) {
//             if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
//                 str += '*';
//             } else {
//                 str += ' ';
//             }
//         }
//         console.log(str);
//     }
// }

// hollowSquare(6);


function rightAngledTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str += '*';
        }
        console.log(str);
    }
}

rightAngledTriangle(6);


