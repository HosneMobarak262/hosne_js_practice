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
console.log("Fibonacci of 16 is: " + fibonacci(16));

// 15 Fibonacci with Behold Binet’s Formula
function fibonacciBinet(num) {
    var sqrt5 = Math.sqrt(5);
    var firstTerm = (1 + sqrt5) / 2;
    var secondTerm = (1 - sqrt5) / 2;
    return Math.round((Math.pow(firstTerm, num) - Math.pow(secondTerm, num)) / sqrt5);
}
console.log("Fibonacci using Binet formula of 16 is: " + fibonacciBinet(16));
console.log("Fibonacci using Binet formula of 60 is: " + fibonacciBinet(60));
console.log("Fibonacci using Binet formula of 600 is: " + fibonacciBinet(600));
console.log("Fibonacci using Binet formula of 6000 is: " + fibonacciBinet(6000));

// 16 Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    if( num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0 ) {
        return false;
    }
    var maxIteration = Math.floor( Math.sqrt(num));
    for (let i = 11; i <=  maxIteration; i+=10) {
        if( num % i == 0) {
            return false;
        }        
    }
    for (let i = 13; i <=  maxIteration; i+=10) {
        if( num % i == 0) {
            return false;
        }        
    }
    for (let i = 17; i <=  maxIteration; i+=10) {
        if( num % i == 0) {
            return false;
        }        
    }
    for (let i = 19; i <=  maxIteration; i+=10) {
        if( num % i == 0) {
            return false;
        }        
    }
    return true;
}
console.log("Is 11 prime: " + isPrime(11));
console.log("Is 12 prime: " + isPrime(12));
console.log("Is 13 prime: " + isPrime(13));
console.log("Is 14 prime: " + isPrime(14));
console.log("Is 15 prime: " + isPrime(15));
console.log("Is 16 prime: " + isPrime(16));
console.log("Is 17 prime: " + isPrime(17));
console.log("Is 18 prime: " + isPrime(18));
console.log("Is 19 prime: " + isPrime(19));

console.log("Is 21 prime: " + isPrime(21));
console.log("Is 22 prime: " + isPrime(22));
console.log("Is 23 prime: " + isPrime(23));
console.log("Is 24 prime: " + isPrime(24));
console.log("Is 25 prime: " + isPrime(25));
console.log("Is 26 prime: " + isPrime(26));
console.log("Is 27 prime: " + isPrime(27));
console.log("Is 28 prime: " + isPrime(28));
console.log("Is 29 prime: " + isPrime(29));

console.log("Is 31 prime: " + isPrime(31));
console.log("Is 32 prime: " + isPrime(32));
console.log("Is 33 prime: " + isPrime(33));
console.log("Is 34 prime: " + isPrime(34));
console.log("Is 35 prime: " + isPrime(35));
console.log("Is 36 prime: " + isPrime(36));
console.log("Is 37 prime: " + isPrime(37));
console.log("Is 38 prime: " + isPrime(38));
console.log("Is 39 prime: " + isPrime(39));

console.log("Is 41 prime: " + isPrime(41));
console.log("Is 42 prime: " + isPrime(42));
console.log("Is 43 prime: " + isPrime(43));
console.log("Is 44 prime: " + isPrime(44));
console.log("Is 45 prime: " + isPrime(45));
console.log("Is 46 prime: " + isPrime(46));
console.log("Is 47 prime: " + isPrime(47));
console.log("Is 48 prime: " + isPrime(48));
console.log("Is 49 prime: " + isPrime(49));

console.log("Is 123 prime: " + isPrime(123));
console.log("Is 1233 prime: " + isPrime(1233));
console.log("Is 12333 prime: " + isPrime(12333));
console.log("Is 120 prime: " + isPrime(120));
console.log("Is 13129 prime: " + isPrime(13129));
console.log("Is 13127 prime: " + isPrime(13127));
console.log("Is 131297 prime: " + isPrime(131297));

// 16 Prime number using Fermat's little theorem 
console.log("Prime number using Fermat's little theorem.")
function isPrimeFermet(num) {
    if(num <= 1) {
        return false;
    }
    if(num == 2) {
        return true;
    } else{
        let tempPrime = Math.pow(2, num - 1) % num;
        if(tempPrime == 1) {
            return true;
        } else {
            return false;
        }
    }
}
for(var i = 1; i < 100; i++) {
    console.log("Prime Number of " + i + " using Fermet's little theorem is: " + isPrimeFermet(i))
}

// 17 Coding challenge #17: Calculate the sum of digits of a positive integer number
function sumOfDigits(num){
    var tempNum = num;
    var sum = 0;
    while(tempNum != 0){
        sum += tempNum % 10;
        tempNum = Math.floor(tempNum / 10);
    }
    return sum;
}
console.log("Sum of integer digits: " + sumOfDigits(1235231));

// 18 Coding challenge #18: Print the first 100 prime numbers
printPrimes(100);

function printPrimes(num){
    var n = 0;
    var i = 2;

    while(n < num){
        if(isPrimeFermet(i)){
            n++;
            console.log( n + " --> " + i);
        }
        i++;
    }
}

// 19 Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
betweenPrimes(50, 200)

function betweenPrimes(num, startAt){
    var n = 0;
    var i = startAt;

    while(n < num){
        if(isPrimeFermet(i)){
            n++;
            console.log(n + " --> " + i);
        }
        i++;
    }
}

// Coding challenge #20: Rotate an array to the left 1 position
var array1 = [1,2,3,4,5];
console.log(array1);
rotateArray(array1);
console.log(array1);

function rotateArray(array1){
    var first = array1.shift();
    array1.push(first);
}

// Coding challenge #21: Rotate an array to the right 1 position
var array1 = [1, 2, 3, 4, 5, 6];
console.log(array1);
rotateRight(array1);
console.log(array1);

function rotateRight(array1) {
    var last = array1.pop();
    array1.unshift(last);
}