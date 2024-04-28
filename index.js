//Q1
function maxProduct(nums) {
    if (nums.length === 0) return 0;

    let maxNum = nums[0];
    let minNum = nums[0];
    let maxProduct = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        let tempMax = Math.max(current, maxNum * current, minNum * current);
        minNum = Math.min(current, maxNum * current, minNum * current);

        maxNum = tempMax;
        maxProduct = Math.max(maxProduct, maxNum);
    }

    return maxProduct;
}

let nums = [2, 3, -2, 4];
console.log(maxProduct(nums));
// exp 2
let numsExp = [-2, 0, -1];
console.log(maxProduct(numsExp));

//Q2

function totSum(sum1, sum2) {
    const totNum = {};
    for (let i = 0; i < sum1.length; i++) {
        const totNums = sum2 - sum1[i];
        console.log(totNums);
        if (totNum.hasOwnProperty(totNums)) {
            return [totNum[totNums]];
        }   
        totNum[sum1[i]] = i;
    }
    return [];
    
}
const sum1 = [3,2,4];
const sum2 = 6;
console.log(totSum(sum1, sum2));

//Q 3

function reverseWords(input) {
    var words = input.split(" ");
   
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    var str = words.join(" ");
    return str;
}

var str = prompt("Enter a sentence:");
var reversedStr = reverseWords(str);
console.log(reversedStr);

// Q4

var library = [
    {author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true},
    {author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true},
    {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false}
];

function statusBook(library) {
    for (var i = 0; i < library.length; i++) {
        var book = library[i];
        var status = book.readingStatus ? "already read" : "not read yet";
        console.log("Book:", book.title + " by " + book.author + ", Reading Status: " + status);
    }
}

statusBook(library);
// Q5

const price = parseInt(prompt("Enter the price:"));

function cnvrtCoins(price, coins) {
    coins.sort((a, b) => b - a); 

    const result = [];

    for (let i = 0; i < coins.length; i++) {
        const numCoins = Math.floor(price / coins[i]); // Calculate the number of coins of current denomination

        for (let j = 0; j < numCoins; j++) {
            result.push(coins[i]); 
        }

        price %= coins[i]; 
    }

    return result;
}

const coins = [25, 10, 5, 2, 1];
const result = cnvrtCoins(price, coins);
console.log("coins", result.join(", "));
