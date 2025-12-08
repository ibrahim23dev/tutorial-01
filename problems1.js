//Probles01

// partan * pyramid created by @safak
                //  ******
                //   ****
                //    **
                //     *
               
function partanPyramid(n) {
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str += ' ';
        }
        for (let k = 0; k < n - i; k++) {
            str += '*';
        }
        console.log(str);
    }
}

partanPyramid(6);