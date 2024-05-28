// *Question 62:* Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// solution

// blue print for student using interface

interface Student {
    name:string,
    age:number,
    courses :string[]
}

// creating object and filling the blueprint 
// by putting info of student

const student :Student = {

name : "Erum",
age : 30,
courses :["Typescript" , "Next.js" , "BlockChain"]
}

//showing student info

console.log(student);

//student object properties

console.log(student.name);

console.log(student["courses"]);


