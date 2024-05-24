// 🚀 *Day 16 Challenge: Start Coding!* 🚀

// *Question 46:* Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

// solution

//type Alias

type info={
    make:string,
    model:string,
    year:number,
    describe: () => void
}
const Laptop:info ={

    make:"hp",
    model:"Probook CORE i5",
    year:2023,
    describe:function ()  {
        console.log("This is a Laptop description function");
        
        console.log(`This Laptop is Made by ${this.make} model is ${this.model} in ${this.year}`);
        
    }
}

console.log(Laptop);

Laptop.describe()
