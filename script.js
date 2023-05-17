const burgerBtn = document.querySelector(".burger");
const btnIco = document.querySelector(".fa-bars");
const closeIco = document.querySelector(".fa-times");
const nav = document.querySelector("nav ul");

const burgerBtnClick = () => {
  nav.classList.toggle("openBurgerMenu");
  //   burgerBtn.classList.toggle("openBurgerMenu");
  btnIco.classList.toggle("hide");
  closeIco.classList.toggle("hide");
};

burgerBtn.addEventListener("click", burgerBtnClick);
