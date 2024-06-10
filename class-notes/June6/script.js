const btn = document.querySelector(".btn");
// Event handler
let a = 10;
btn.onclick = () => {
  console.log("btn clicked");
  console.log(a++);
};

document.querySelector(".box").onmouseover = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.target.innerHTML);
  console.log(e.target.innerText);
  console.log(e.target.textContent);
  console.log(e.clientX, e.clientY);
};

// event listener

const btn1 = document.querySelector(".btn1");
let darkMode = true;

btn1.addEventListener("click", () => {
  if (darkMode) {
    document.body.style.backgroundColor = "black";
    darkMode = false;
  } else {
    document.body.style.backgroundColor = "white";
    darkMode = true;
  }
});
