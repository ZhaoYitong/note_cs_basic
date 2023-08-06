/*
function Person(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

function f1(person) {
    person.name = "ls";
    person = new Person("aa", 18, 10);
}

var p = new Person("zs", 18, 1000);
console.log(p.name);
f1(p);
console.log(p.name);
*/

/**
 * string to Camel case
 */
/*
 var foo = 'get-element-by-id';

 function convertToCamelStyle(string) {
    var tmp = string.split('-');
    let results = [];
    tmp.forEach((val, index) => {
        if (index !== 0) {
            val = val.slice(0, 1).toUpperCase() + val.slice(1);
        }
        results.push(val);
    });


    return results.join('');
 }

 console.log(convertToCamelStyle(foo));

 String.prototype.customCamelConverter = function() {
    var tmp = this.split('-');
    let results = [];
    tmp.forEach((val, index) => {
        if (index !== 0) {
            val = val.slice(0, 1).toUpperCase() + val.slice(1);
        }
        results.push(val);
    });


    return results.join('');
 }

 console.log("test-aaa-my-lod".customCamelConverter());
 */


 /**
  * Bubble sort
  */
 //  6 5 4
/*
 function BubbleSort(arr) {
    for(let j=arr.length-1; j>0; j--) {
        for(let i=0; i<j; i++) {
            if (arr[i] > arr[i+1]) {
                let tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
            }
        }
    }
    
    return arr;
}

let test = [9,8,7,6,5,4,3,2,1];
console.log(BubbleSort(test));
*/

/**
 * reverse array
 */
/*
 function reverseArrayFunc(arr) {
     const len = arr.length;
     if (len%2 === 0) {
        for(let i=0; i<len/2; i++) {
            let tmp = arr[i];
            arr[i] = arr[len-1-i];
            arr[len-1-i] = tmp;
        }
     } else {
        for(let j=0; j<(len-1)/2; j++) {
            let t = arr[j];
            arr[j] = arr[len-1-j];
            arr[len-1-j] = t;
        }
     }

     return arr;
 }

 let testReverseArrOdd = [1,2,3,4,5,6,7,8,9];
 let testReverseArrEven = [1,2,3,4,5,6,7,8]
 console.log(reverseArrayFunc(testReverseArr));
 */

 /**
  * remove repeated item in array
  */

// function removeRepeatedItem(arr) {
//     let tmpArr = [];
//     arr.forEach(item => {
//         let isRepeat = false;
//         for (let i=0; i<tmpArr.length; i++) {
//             if (tmpArr[i] === item) {
//                 isRepeat = true;
//                 break;
//             }
//         }
//         if (!isRepeat) {
//             tmpArr.push(item);
//             isRepeat = false;
//         } else {
//             return false;
//         }
//     });

//     return tmpArr;
// }

// const testArrForRepeat = [1,2,3,4,1,5,6,2,8,1,5,6];
// console.log(removeRepeatedItem(testArrForRepeat));


// var isPalindrome = function(x) {
//     if (x < 0) {
//         return false;
//     }
//      if (x < 10) {

//         return true;
//     } else {
//         let n = 10 **  Math.floor(Math.log10(x));
//         console.log(n)
//         while (n > 1 && x > 0) {
//             console.log("in")
//             if (Math.floor(x / n) !== x % 10) {
//                 console.log(1);
//                 return false;
//             }
//             x = Math.floor((x % n) / 10);
//             n /= 100;
//         }

//         return true;
//     }
// };

// console.log(isPalindrome(111231));


/**
 *  1: I
 *  3999: 3000 + 900 + 90 + 9: MMM CM XC IX
 */