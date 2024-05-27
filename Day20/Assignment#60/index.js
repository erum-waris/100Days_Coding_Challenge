"use strict";
// *Question 60:* Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
// solution
//here is a requirement of self / immediately invoking function expression
const user_profile = (function () {
    // Details of user,, function encapsulates user info from outside
    let userName = "Affan";
    let userAge = 4;
    return {
        show_info() {
            console.log(`User_Name is ${userName} , User_Age is ${userAge} years old`);
        }
    };
})();
user_profile.show_info();
