// Question 1: Create h2 heading element with text - "Hello java script" Append from "college student" to this text using javascript

const greeting = document.querySelector("h2");
greeting.innerHTML += " college student";
console.log(greeting.innerText);

// Question 2: create 3 div with common name - "box". access them and add some unique text to each of them.

document.body.children[1].innerHTML = "this is box 1";
document.body.children[2].innerHTML = "this is box 2";
document.body.children[3].innerHTML = "this is box 3";
