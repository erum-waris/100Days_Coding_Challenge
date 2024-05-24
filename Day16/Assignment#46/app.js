"use strict";
// 🚀 *Day 16 Challenge: Start Coding!* 🚀
const Laptop = {
    make: "hp",
    model: "Probook CORE i5",
    year: 2023,
    describe: function () {
        console.log("This is a Laptop description function");
        console.log(`This Laptop is Made by ${this.make}) model is ${this.model} in ${this.year}`);
    }
};
console.log(Laptop);
Laptop.describe();
