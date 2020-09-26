// /**
//  * @param {string} moves
//  * @return {boolean}
//  */
// var judgeCircle = function(moves) {
//     let source = [0, 0];
//     const dirMap = {
//         U: {
//             index: 1,
//             add: 1
//         },
//         D: {
//             index: 1,
//             add: -1
//         },
//         L: {
//             index: 0,
//             add: -1
//         },
//         R: {
//             index: 0,
//             add: 1
//         }
//     }

//     for (let move of moves) {
//         const index = dirMap[move]['index'];
//         const add = dirMap[move]['add'];
//         source[index] = source[index] + add;
//     }

//     console.log(source);

//     let result = true;
//     source.forEach(s => {
//         if (s !== 0) {
//             result = false;
//         }
//     });
//     return result;
// };

var judgeCircle = function(moves) {
    let obj = {
        L: 0,
        R: 0,
        U: 0,
        D: 0
    };
    for (let move of moves) {
        obj[move]++;
        console.log(obj[move])
    }
    return obj['L'] === obj['R'] && obj['U'] ==== obj['D'];
};
 console.log(judgeCircle("UD"));