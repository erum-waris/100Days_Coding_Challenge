"use strict";
// *Question 47:* Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// solution
let Laptops = [
    {
        make: "hp",
        model: "Probook core i5",
        year: 2023
    },
    {
        make: "Dell",
        model: "XPS 15",
        year: 2021
    },
    {
        make: "Lenovo",
        model: "ThinkPad core i5",
        year: 2020
    }
];
let [Laptop1, Laptop2] = Laptops;
console.log("\n *** Property of Laptops no 1 *** \n");
console.log(Laptop1);
console.log("\n *** Property of Laptops no 2 *** \n");
console.log(Laptop2);
console.log("\n *** Laptops Object *** \n");
console.log(Laptops);
