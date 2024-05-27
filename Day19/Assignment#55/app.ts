// 🚀 *Day 19 Challenge: Start Coding!* 🚀

// *Question 55:* Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
// solution

let numberList : number[] =[ 1,3,4,6,2,9];

console.log(` Original Array : ${numberList}`);

// using map method to print double no of original value

let DoubleNumber = numberList.map(number => number * 2)

console.log(DoubleNumber);

