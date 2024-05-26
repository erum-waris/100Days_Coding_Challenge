"use strict";
// *Question 53:* Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
// solution
//A list of programmer's skill
let developerSkills = {
    languages: ["Typescript", "Python"],
    frameWork: ["React", "Angular", "Vue"],
    tools: ["Git", "Docker", "Webpack"]
};
//Getting specific skills from the list 
let { languages, frameWork, tools } = developerSkills;
//showing specific skills 
console.log(` ${languages[1]}  , ${frameWork[1]}  , ${tools}`);
