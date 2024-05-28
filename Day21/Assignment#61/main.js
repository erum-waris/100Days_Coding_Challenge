"use strict";
// 🚀 *Day 21 Challenge: Start Coding!* 🚀
// *Question 61:* Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// solution 
// making Enum to store constant values
var vehicles;
(function (vehicles) {
    vehicles[vehicles["cars"] = 0] = "cars";
    vehicles[vehicles["trucks"] = 1] = "trucks";
    vehicles[vehicles["motorcycles"] = 2] = "motorcycles";
    vehicles[vehicles["bicycles"] = 3] = "bicycles";
    vehicles[vehicles["buses"] = 4] = "buses";
})(vehicles || (vehicles = {}));
console.log(vehicles.motorcycles);
let Vehicles = vehicles.trucks;
console.log(Vehicles);
