
// *Question 48:* Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

// solution 

let LaptopsPrices1 = [ 10000,45000,25000];

let LaptopsPrices2 = [ 20000,40000,30000];

let combinedPrices = 
[...LaptopsPrices1 , ...LaptopsPrices2].sort()

console.log(combinedPrices);

