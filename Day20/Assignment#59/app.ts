// *Question 59:* Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

// solution

// works like a magic box once we set default value it will work like a magic box
// Hint : we can always set the value whether it's optional or default it will be on last location

let Special_Adders = ( number1:number,number:number= 5 ): number => 

    { 
       let magic_box = number + number1
       return magic_box;
    }

console.log(Special_Adders(10));
