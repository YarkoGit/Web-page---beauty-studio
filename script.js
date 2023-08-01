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
  burgerClick() {
    this.btnIco.classList.toggle("hide");
    this.closeIco.classList.toggle("hide");
    this.nav.classList.toggle("openBurgerMenu");
  }
  registerClickEvent() {
    this.burgerBtn.addEventListener("click", () => {
      this.burgerClick();
    });
    this.nav.addEventListener("click", () => {
      this.burgerClick();
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

class HeightAdjuster {
  constructor(elementSelector, minWidth) {
    this.elements = document.querySelectorAll(elementSelector);
    this.minWidth = minWidth;
  }
  clearStyleHeights() {
    this.setStyleHeights("");
  }
  getMaxHeight() {
    let elementsArray = Array.from(this.elements);
    let heightsArray = elementsArray.map((element) => element.offsetHeight);
    return Math.max(...heightsArray);
  }
  setStyleHeights(height) {
    this.elements.forEach((element) => {
      element.style.height = height;
    });
  }
  adjust() {
    this.clearStyleHeights();
    if (window.innerWidth >= this.minWidth) {
      let maxHeight = this.getMaxHeight();
      this.setStyleHeights(`${maxHeight}px`);
    }
  }
}
const cardHeightAdjuster = new HeightAdjuster(".card-body", 768);
cardHeightAdjuster.adjust();

window.addEventListener("resize", () => {
  cardHeightAdjuster.adjust();
});
