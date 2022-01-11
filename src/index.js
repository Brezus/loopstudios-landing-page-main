const burger = document.querySelector(".burger");
const hiddenNav = document.querySelector(".nav-ul");
const header = document.getElementById("header");
const acomplishmentsGrid = document.querySelector(".sec2-grid");
const hiddenAccsGrid = document.querySelectorAll(".acc");
const seeAllBtn = document.querySelector(".mobile-btn");
let showMorePressed = false;

burger.addEventListener("click", () => {
  hiddenNav.classList.toggle("active");
  header.classList.toggle("active");
  if (burger.srcset != "/images/icon-close.svg") {
    burger.srcset = "/images/icon-close.svg";
  } else {
    burger.srcset = "/images/icon-hamburger.svg";
  }
});

seeAllBtn.addEventListener("click", () => {
  if (showMorePressed === false) {
    seeAllBtn.textContent = "SEE LESS";
    acomplishmentsGrid.classList.add("show");
    for (let i = 0; i < hiddenAccsGrid.length; i++) {
      hiddenAccsGrid[i].classList.add("show-acomplishment");
      hiddenAccsGrid[i].classList.remove("dp-none");
    }
    showMorePressed = true;
  } else if (showMorePressed) {
    seeAllBtn.textContent = "SEE ALL";
    acomplishmentsGrid.classList.remove("show");
    for (let i = 0; i < hiddenAccsGrid.length; i++) {
      hiddenAccsGrid[i].classList.remove("show-acomplishment");
      hiddenAccsGrid[i].classList.add("dp-none");
    }
    showMorePressed = false;
  }
});
