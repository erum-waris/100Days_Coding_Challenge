
// 🚀 *Day 20 Challenge: Start Coding!* 🚀

// *Question 58:* Average Score Calculator: Write a simple program that can take lots of scores and find their average.

// solution

//  creating function to find average  of scores

function get_average(...scores:number[]):number{
   let total= scores.reduce( (prev,curr) => prev +curr ,0)

    return total / scores.length
}

// invoking function to get average 

let average = get_average(24,45,78,89);

console.log(average);
