const phoneContainer = document.querySelector(".phone-container");

let isDragging = false,
  startX,
  startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  phoneContainer.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = phoneContainer.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  phoneContainer.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  phoneContainer.classList.remove("dragging");
};

phoneContainer.addEventListener("mousedown", dragStart);
phoneContainer.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
