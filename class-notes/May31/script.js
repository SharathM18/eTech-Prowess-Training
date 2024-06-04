// single line comment

/* multiple line comments */

let a = 5;
console.log("a++", a++, "a = ", a);
console.log("a--", a--, "a = ", a);
console.log("++a", ++a);
console.log("--a", --a);

console.log(5 !== "4");

const number = prompt("enter the number:");
if (number % 5 == 0) {
  console.log("yes");
} else {
  console.log("not");
}

let grades = prompt("Enter the marks: ");
if (grades >= 80 && grades <= 100) {
  console.log("grade: A");
} else if (grades >= 70 && grades < 89) {
  console.log("grade: B");
} else if (grades >= 60 && grades <= 69) {
  console.log("grade: C");
} else if (grades >= 50 && grades <= 59) {
  console.log("grade: D");
} else if (grades >= 0 && grades <= 49) {
  console.log("grade: F");
}
