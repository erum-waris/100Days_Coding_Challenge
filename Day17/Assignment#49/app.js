"use strict";
// 🚀 *Day 17 Challenge: Start Coding!* 🚀
// *Question 49:* Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
// solution
//function with rest parameters
function Hobby(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(` ${hobby}! Enjoy your favourite Hobby in yout Leisure time`);
    });
}
Hobby("Reading Books", "Writing", "surfing internet");
