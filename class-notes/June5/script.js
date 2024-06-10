const box = document.querySelector(".box");
const para = document.querySelector("#para");

console.log(box);
console.log(para);

console.log(box.getAttribute("id"));

console.log(para.getAttribute("id"));
para.setAttribute("id", "paragraph");
console.log(para.getAttribute("id"));
console.log(para);

box.style.backgroundColor = "red";
box.style.fontSize = "1.5rem";

box.innerText = "Hello";
// box.style.visibility = "hidden";

const newBtn = document.createElement("button");
newBtn.innerText = "Click me";
console.log(newBtn);

box.append(newBtn);
box.prepend(newBtn);
box.before(newBtn);
box.after(newBtn);

const heading = document.createElement("h1");
heading.innerHTML = "<strong>This is Heading</strong>";
box.before(heading);

para.remove();

const Btn = document.createElement("button");
Btn.innerText = "Click me";
Btn.style.color = "white";
Btn.style.backgroundColor = "red";
document.querySelector("body").prepend(Btn);

const para = document.querySelector(".para");
console.log(para.classList);

para.setAttribute("class", "para1");
console.log(para.classList);
