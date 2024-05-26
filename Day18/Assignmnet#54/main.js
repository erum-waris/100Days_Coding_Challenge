"use strict";
// *Question 54:* Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
// solution
// creating function  for flexible object for user's choice
function UserChoice(key, value) {
    let mutableObject = {};
    mutableObject[key] = value;
    return mutableObject;
}
// in function's empty object user can put arbitary value
let UserNeed = UserChoice("CarNo", "AE123");
console.log(UserNeed);
