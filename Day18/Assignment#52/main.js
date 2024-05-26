"use strict";
// *Question 52:* Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
// solution
//creatinng  nested object
let Smartphone = {
    brand: "Infinix",
    model: "Hot 11",
    Features: {
        ScreenSize: "6.1inch",
        battery: "12 hours+"
    }
};
console.log(Smartphone); //  print object
console.log(Smartphone.Features); //accessing object property with dot notation
console.log(Smartphone["model"]);
