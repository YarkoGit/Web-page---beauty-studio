// const burgerBtn = document.querySelector(".burger");
// const btnIco = document.querySelector(".fa-bars");
// const closeIco = document.querySelector(".fa-times");
// const nav = document.querySelector("nav ul");

// const burgerBtnClick = () => {
//   nav.classList.toggle("openBurgerMenu");
//   //   burgerBtn.classList.toggle("openBurgerMenu");
//   btnIco.classList.toggle("hide");
//   closeIco.classList.toggle("hide");
// };

// burgerBtn.addEventListener("click", burgerBtnClick);

class HamburgerMenu {
  constructor(
    burgerBtnSelector,
    btnIcoSelector,
    closeIcoSelector,
    navSelector
  ) {
    this.burgerBtn = document.querySelector(burgerBtnSelector);
    this.btnIco = document.querySelector(btnIcoSelector);
    this.closeIco = document.querySelector(closeIcoSelector);
    this.nav = document.querySelector(navSelector);
  }
  click() {
    this.btnIco.classList.toggle("hide");
    this.closeIco.classList.toggle("hide");
    this.nav.classList.toggle("openBurgerMenu");
  }
  registerClickEvent() {
    this.burgerBtn.addEventListener("click", () => {
      this.click();
    });
  }
}

const hamburgerMenu = new HamburgerMenu(
  ".burger",
  ".fa-bars",
  ".fa-times",
  "nav ul"
);

hamburgerMenu.registerClickEvent();
