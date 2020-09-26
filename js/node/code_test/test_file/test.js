let arr1To19 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
function helper(num) {
    if (num < 20) {
        return arr1To19[num-1];
    }
    if (num < 100) {
        if (num % 10 !== 0) {
            return tens[Math.floor(num / 10) - 2] + '-' + helper(num % 10);
        } else {
            return tens[Math.floor(num / 10) - 2];
        }
    } else {
        return num;
    }
}

for (let i=1; i<100; i++) {
    console.log(i);
    console.log(helper(i));
}