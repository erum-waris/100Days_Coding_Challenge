"use strict";
// *Question 57:* Find the Average Grade: Given a list of grades, calculate the average grade.
const Grades = [15, 42, 23, 64];
// find out average grades
// average =  sum _numbers / arr.length
const average = Grades.reduce((prev, curr) => prev + curr) / Grades.length;
console.log(average);
