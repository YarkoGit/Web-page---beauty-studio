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

class CurrentMenuItemHighlighter {
  constructor(
    navBarSelector,
    sectionsSelector,
    navBarItemsSelector,
    hightlightCssClass
  ) {
    this.navBar = document.querySelector(navBarSelector);
    this.sections = document.querySelectorAll(sectionsSelector);
    this.navBarItems = document.querySelectorAll(navBarItemsSelector);
    this.hightlightCssClass = hightlightCssClass;
  }

  getNavBarPosition() {
    return window.pageYOffset + this.navBar.offsetHeight;
  }
  getSectionPosition(section) {
    return section.offsetTop + section.offsetHeight;
  }
  getDistance(section) {
    return this.getSectionPosition(section) - this.getNavBarPosition();
  }
  getNearestSection() {
    let minDistance = 0;
    let neraestSection = null;
    this.sections.forEach((section) => {
      let distance = this.getDistance(section);
      if (distance >= 0) {
        if (neraestSection === null || distance < minDistance) {
          minDistance = distance;
          neraestSection = section;
        }
      }
    });
    return neraestSection;
  }
  getNavbarItem(section) {
    let navBarItemId = section.dataset.menuItemId;
    return document.querySelector(`#${navBarItemId}`);
  }
  clearHightlightClasses() {
    this.navBarItems.forEach((navBarItem) => {
      navBarItem.classList.remove(this.hightlightCssClass);
    });
  }
  setHightlightClass(navBarItem) {
    navBarItem.classList.add(this.hightlightCssClass);
  }
  containsHightlightClass(navBarItem) {
    return navBarItem.classList.contains(this.hightlightCssClass);
  }

  hightlightNearestSection() {
    let nearestSection = this.getNearestSection();
    if (nearestSection !== null) {
      let navBarItem = this.getNavbarItem(nearestSection);
      if (!this.containsHightlightClass(navBarItem)) {
        this.clearHightlightClasses();
        this.setHightlightClass(navBarItem);
      }
    } else {
      this.clearHightlightClasses();
    }
  }
}

const currentMenuItemHighlighter = new CurrentMenuItemHighlighter(
  ".menu-items",
  ".menu-sections",
  ".menu-items li",
  "menu-items-hightlighted"
);

window.addEventListener("scroll", () => {
  currentMenuItemHighlighter.hightlightNearestSection();
});
