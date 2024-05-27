
// *Question 56:* Keep Only Strings: Given a mix of different types of items, make a new list that has only the words

//creating a mix items list

const mix_values : unknown[] = ["Apple",34,"Mango",54,"Banana",23]

//list of strings by filter method

let str_values  = mix_values.filter( item  => typeof item === "string")

console.log(str_values);    //output:["Apple","Mango","Banana"]
