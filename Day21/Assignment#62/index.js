"use strict";
// *Question 62:* Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
// creating object and filling the blueprint 
// by putting info of student
const student = {
    name: "Erum",
    age: 30,
    courses: ["Typescript", "Next.js", "BlockChain"]
};
console.log(student);
console.log(student.name);
console.log(student["courses"]);
