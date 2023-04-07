// Array generate
const arr = [];
for (var i = 0; i < 50; i++){
    arr.push(Math.floor(Math.random() * 100));
}

// Problem 1: smallest number
let smallestNum = Math.min();
arr.forEach(element => {
    if(smallestNum > element){
        smallestNum = element;
    }
});
console.log(`Array: ${arr}`)
console.log(`Smallest Number: ${smallestNum}`);

// Problem 2: largest number
let largestNum = Math.max();
arr.forEach(item => {
    if(largestNum < item){
        largestNum = item;
    }
});
console.log(`Largest Number: ${largestNum}`);

// Problem 3: sum of all numbers
let sumOfNum = 0;
arr.forEach(item =>{
    sumOfNum += item;
});
console.log(`Sum of Numbers: ${sumOfNum}`);

// Problem 4: Given an array of strings, create a new array with the first letter of each string
const strings = ['hello', 'world', 'I', 'am', 'hosne', 'mobarak', 'hossain'];
const firstLetters = [];

strings.forEach(item => {
    firstLetters.push(item[0]);
});
console.log(`First letter of each string: ${firstLetters}`);

// Problem 5: create an array of even numbers from an array
const evenArray = [];
arr.filter(item => {
    if(item % 2 == 0){
        evenArray.push(item);
    }
});
console.log(`Even array: ${evenArray}`);

// Problem 6: longest several strings
let longestString = [];
let longestStringLength = -1;
strings.forEach(item => {
    var item_length = item.length;
    if(item_length >= longestStringLength){
        longestStringLength = item_length;
        if(longestString.length != 0 ){
            var preLen = longestString[0].length;
            if ( preLen < longestStringLength){
                longestString = [];
                longestString.push(item);
            } else {
                longestString.push(item);
            }
        } else {
            longestString.push(item);
        }
    }
});
console.log(`Longest length string: ${longestString}`);

// Problem 7: Average of numbers
console.log(`Average of Numbers: ${sumOfNum/arr.length}`);

// Problem 8: Sort strings
console.log(`String sort: ${strings.sort()}`)

// Problem 9: remove duplicates from array
const uniqueNumbers = [...new Set(arr)];
console.log(`Unique numbers from an array: ${uniqueNumbers}`);

// Problem 10: find two numbers that add up to the target value
let target = 80;
let arrLength = arr.length;
for(var i = 0; i < arrLength; i++){
    for (var j = i + 1; j < arrLength; j ++){
        if(arr[i] + arr[j] === target){
            console.log(`Target: ${target} = ${arr[i]} + ${arr[j]}`)
        }
    }
}

// Problem 10: using Hash
console.log("Hashing Algorithm");
function printPairs(arr, sum){
    let hashArr = [];
    let temp = 0;
    arr.forEach(item => {
        temp = sum - item;
        var hashArrLen = hashArr.length;
        for(var i = 0; i < hashArrLen ; i++){
            if(arr[i] == temp){
                console.log(`Target ${target} = ${temp} + ${item}`);
            }
        }
        hashArr.push(item);
    });
}
// I wasn't expecting this code I wrote by myself to work but somehow it is working
printPairs(arr, target);

// Problem 11: food ordering app
const menuItems = [
    {name: "dal", price: 23.5},
    {name: "vaat", price: 33.1},
    {name: "maas", price: 50},
    {name: "shobji", price: 15}
]
menuItems.sort((a, b) => a.price - b.price);
console.log(menuItems);

// Problem 12: social media app
const userPosts = [
    "just went for a #run #fitness",
    "enjoying the #weekend with #friends",
    "can't wait for the #vacation #beach #run",
];
const hashTagArray = new Set();

userPosts.forEach(post => {
    let words = post.split(" ");
    words.forEach(word => {
        if(word.startsWith("#")){
            hashTagArray.add(word.slice(1));
        }
    });
});
console.log(hashTagArray);