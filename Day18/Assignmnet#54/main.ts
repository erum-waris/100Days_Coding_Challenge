// *Question 54:* Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

// solution

// creating function  for flexible object for user's choice

function UserChoice(key :string , value:string ){

let mutableObject:any= {};

  mutableObject[key] = value;

return mutableObject;

}
// in function's empty object user can put arbitary value

let UserNeed :string = UserChoice("CarNo","AE123")

console.log(UserNeed);


