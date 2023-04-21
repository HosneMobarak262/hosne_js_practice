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

// Problem 12: using regular expression

// const hashArr = new Set();

// userPosts.forEach((post) => {
//     let regex = /#\w+/g;
//     let matches = post.content.match(regex);

//     if(matches){
//         matches.forEach((item) => {
//             hashArr.add(item.slice(1))
//         });
//     }
// });

// console.log(hashArr);

// Error for Above code

// let matches = post.content.match(regex);
// match Error                ^

// TypeError: Cannot read properties of undefined (reading 'match')
// at D:\ostad\jspractice\hosne_mobarak_HW-2_from_faisal_vai.js:146:32
// at Array.forEach (<anonymous>)
// at Object.<anonymous> (D:\ostad\jspractice\hosne_mobarak_HW-2_from_faisal_vai.js:144:11)
// at Module._compile (node:internal/modules/cjs/loader:1275:14)
// at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
// at Module.load (node:internal/modules/cjs/loader:1133:32)
// at Module._load (node:internal/modules/cjs/loader:972:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
// at node:internal/main/run_main_module:23:47


// Problem 13: weather app

const temperatures = [15, 65, 24, 36, 98];

const formattedTemp = temperatures.map((temp) => {
    const fahrenheit = temp * 1.8 + 32;
    return `${temp}'C = ${fahrenheit}'F`
});

console.log(formattedTemp);

// Problem 14: video sharing site

const videos = [
    {
        id: "vid001",
        title: "How to Code a React App",
        views: 2000,
        likes: 60,
        comments: [
            { id: "c1", text: "Nice Tutorial" },
            { id: "c2", text: "Thanks for sharing"},
        ],
    },
    {
        id: "vid002",
        title: "Building a REST API with Node.js",
        views: 1500,
        likes: 30,
        comments: [
            { id: "c3", text: "Very helpful, thanks"},
            { id: "c4", text: "Can't wait to try this out."},
        ],
    },
];

// increment the view count of a video
function incrementViewCount(videoId){
    const video = videos.find((vid) => {
        return vid.id === videoId
    });
    video.views += 1;
}

// add comment to a video
function addComment(videoId, comment){
    const video = videos.find((vid) => {
        return vid.id === videoId;
    });
    video.comments.push(comment);
}

// increment like of a video
function incrementLike(videoId){
    const video = videos.find((vid) => vid.id === videoId );
    video.likes += 1;
}

// when using arrow function, if we are using {}, then it must return something but if we are not using {} and everything is done in a single line, then we don't have to use return.

incrementViewCount("vid001");
addComment("vid002", { id: "c5", text: "Excellent tutorial."});
incrementLike("vid002");

console.log(videos);

// Problem 15: Facebook reactions

const posts = [
    {
        id: "_1",
        author: "Mobarak",
        content: "JS 100 problem basics",
        reactions: {
            like: 60,
            love: 45,
            haha: 8,
            wow: 4,
            sad: 2,
            angry: 0,
        },
    },
    {
        id: "_2",
        author: "janina",
        reactions: {
            like: 100,
            love: 90,
            haha: 80,
            wow: 70,
            sad: 10,
            angry: 5,
        }
    },
];

function incrementReactionCount(postId, reactionType){
    try {
        const post = posts.find((item) => item.id === postId);
        post.reactions[reactionType] += 1;
        console.log(`Incremented ${reactionType} Reaction count for post ${postId}` );    
    } catch (error) {
        console.log(`ID --> ${postId} not found with error: ${error}`);
    }
    
}

// testing
incrementReactionCount("_1", "love");
incrementReactionCount("_2", "angry");
incrementReactionCount("_3", "like");

console.log(posts);

// Problem 16: find two numbers that add up to a certain value

const purchases = [1,2,3,4,5,6,1,7,8,9,6,5,8,9,8];
let maxSum = Math.max(...purchases);
let minSum = Math.min(...purchases);

maxSum = maxSum << 1;
minSum = minSum << 1;

console.log(maxSum, minSum);

 let targetLargest = 0;
 let targetCount = 0;

function targetCheck(target){
    let pairs = [];
    let count = 0;
    let purchaseLen = purchases.length;

    console.log(`Target: ${target}`);
    for(let i = 0; i < purchaseLen; i++){
        for(let j = i + 1; j < purchaseLen; j++){
            if(purchases[i] + purchases[j] === target){
                pairs.push([purchases[i], purchases[j]] );
                ++count;
            }
        }
    }
    if (targetCount < count) {
        targetLargest = target;
        targetCount = count;
    }
    console.log(pairs );
    console.log(`Number of pairs: ${count}`);
}

for (var i = minSum; i <= maxSum; i++ ){
    targetCheck(i);
}

console.log(`Largest target: ${targetLargest}`);
console.log(`Largest count: ${targetCount}`);

// Problem 17: restaurant inventory

const ingredients = [
    { name: "dough", inventory: 12},
    { name: "tomato sauce", inventory: 35},
    { name: "potato", inventory: 26},
    { name: "bread", inventory: 40},
];

// function to decrease inventery
function deductInventory(name, quantity){
    try {
        const ingredient = ingredients.find((i) => i.name === name);
        ingredient.inventory -= quantity;
        console.log(`Inventory updated for ${name} : ${ingredient.inventory} remaining`);
    } catch (error) {
        console.log(`Ingredient ${name} not found`);
    }
}

// function to increase inventory
function addInventory(name, quantity){
    try{
        const ingredient = ingredients.find((i) => i.name === name);
        ingredient.inventory += quantity;
        console.log(`Inventory updated for ${name} : ${ingredient.inventory} remaining`);
    } catch (error){
        console.log(`Ingredient ${name} not found`);
    }
}

deductInventory("dough", 5);
addInventory("potato", 10);
addInventory("potato1223", 100);

// Problem 18: given an array of objects representing products, sort the products by price form lowest to highest

const products = [
    { name: "balish", price: 450},
    { name: "blancket", price: 2500},
    { name: "sock", price: 110},
];

products.sort((a, b) => a.price - b.price);

console.log(products);

// problem 19: return objects greater than 18 years old

const people = [
    { name: "Hosne Mobarak", age: 34},
    { name: "Eng. Shimul", age: 36},
    { name: "Senija", age: 5},
    { name: "Afra", age: 3},
]

const adults = people.filter(item => item.age >= 18);

console.log(`Adults: ${JSON.stringify(adults)}`);