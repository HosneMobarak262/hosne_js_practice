// 1. Coding challenge #1. Coding challenge #1: Print numbers from 1 to 10
for (var i = 0; i < 11; i++){
    process.stdout.write(i + " ");
}
console.log("");

// 2. Coding challenge #2. Coding challenge #2: Print the odd numbers less than 100
for (var i = 1; i < 100; i += 2){
    process.stdout.write(i + " ");
}
console.log("");

// 3. Coding challenge #3: Print the multiplication table with 7
for (var i = 1; i <=10; i++) {
    console.log("7 * " + i + " = " + 7*i);
}
console.log("");

// 4. Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10
for(let i = 1; i < 11; i++){
    for (let j = 1; j < 11; j++) {
        let result = i + " * " + j + " = " + i * j;
        console.log(result);
    }
    console.log("");
}

// 5. Coding challenge #5: Calculate the sum of numbers from 1 to 10
var num = 10;
console.log((num * (num + 1)) >> 1 );
console.log("");

// Coding challenge #6: Calculate 10!
var factorial = 1;
var num = 10;
for (var i = 2; i <= num; i++){
    factorial *= i;
}
console.log("Factorial of " + num + " is: " + factorial);
console.log("");

// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 3000

var max = 3000 - 1;
var min = 10 + 1;
var n = ((max -min) >> 1) + 1;
var sum = n * ( min + n - 1);
console.log("sum of odd numbers greater than 10 and less than 3000 is: " + sum);
sum = 0;

for(var i = 11; i <= 3000; i += 2){
    sum += i;
}
console.log("sum of odd numbers greater than 10 and less than 3000 is: " + sum);
console.log("");

// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahrenheit(value) {
    return value * 1.8 + 32;
}

var result = celsiusToFahrenheit(200);
console.log("celsius to fahrenheit: " + result);
console.log("");

// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelsius(value) {
    return (value - 32) / 1.8;
}

var result = fahrenheitToCelsius(200);
console.log("fahrenheit to celsius: " + result);
console.log("");

// Coding challenge #10: Calculate the sum of numbers in an array of numbers
function sumArray(ar) {
    var sum = 0;

    for (var i = ar.length - 1; i >= 0; i--) {
        sum += ar[i];
    }

    return sum;
}

var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var sum = sumArray(ar);
console.log("sum of numbers in array: " + sum);
console.log("");

// Coding challenge #11: Calculate the average of the numbers in an array of numbers

function averageArray(ar) {
    var n = ar.length;
    var sum = 0;

    for (var i = ar.length - 1; i >= 0; i--) {
        sum += ar[i];
    }

    return sum / n;
}

var ar = [1, 3, 9, 15, 90];
var avg = averageArray(ar);

console.log("Average is: ", avg);
console.log("");

// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar) {
    var ar2 = [];

    for (var i = 0; i < ar.length; i++) {
        if (ar[i] >= 0) {
            ar2.push(ar[i]);
        }
    }

    return ar2;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);

console.log(ar);
console.log("positive numbers array: " + ar2);
console.log("");

// Coding challenge #13: Find the maximum number in an array of numbers
function findMax(ar) {
    var max = ar[0];

    for (var i = 0; i < ar.length; i++) {
        if (ar[i] > max) {
            max = ar[i];
        }
    }

    return max;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);
console.log("");

// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion

var fib0 = 0;
var fib1 = 1;

console.log("Fibonacci number 0 is: " + fib0);
console.log("Fibonacci number 1 is: " + fib1);

for(var i = 2; i < 10; i++){
    var fibTemp = fib0 + fib1;
    console.log("Fibonacci number " + i + " is: " + fibTemp);

    fib0 = fib1;
    fib1 = fibTemp;
}

// 15 Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion

function fibonacci(num){
    if(num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
console.log(fibonacci(16));

// 15 Fibonacci with Behold Binet’s Formula
function fibonacciBinet(num) {
    var sqrt5 = Math.sqrt(5);
    var firstTerm = (1 + sqrt5) / 2;
    var secondTerm = (1 - sqrt5) / 2;
    return Math.round((Math.pow(firstTerm, num) - Math.pow(secondTerm, num)) / sqrt5);
}
console.log(fibonacciBinet(16));
console.log(fibonacciBinet(60));
console.log(fibonacciBinet(600));
console.log(fibonacciBinet(6000));