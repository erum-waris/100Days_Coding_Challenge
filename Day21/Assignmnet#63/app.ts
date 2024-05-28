// *Question 63:* Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

// solution

//type Alias ceating custom type for shape

type Shape = {
    shape_Name : "Circle" | "Rectangle",
    width?:number,  //rectangle width
    height?:number,  // rectangle heigth
    radius?:number,   //circle radius
}

// describing circle 

const circle :Shape = {
    shape_Name : "Circle" ,
    radius: 10
}

console.log(circle);

//Describing Rectangle

const Rectangle :Shape = {
     shape_Name: "Rectangle",
    height:24,
    width:12
}

console.log(Rectangle);
