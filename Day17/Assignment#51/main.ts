// *Question 51:* Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

//original function to caculate an area of a Rectangle

function calculateArea(width:number, height:number):number {
    return width * height
}

console.log(calculateArea(4 ,7));

//Refactoring function in Arrow Function into Variable

let get_Area_Arrow = (width:number, height:number):number =>
    {
    return width * height
}
console.log(get_Area_Arrow(2,7));
