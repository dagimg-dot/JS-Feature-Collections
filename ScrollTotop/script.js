window.onscroll = () => stickNavBar();

const main = document.querySelector("main");

const fillMain = () => {
  for (let i = 0; i < 10; i++) {
    const element = createElement("div");
    applyStyle(element);
    main.appendChild(element);
  }
};

const createElement = (tagName) => {
  const element = document.createElement(tagName);
  return element;
};

const applyStyle = (element) => {
  element.style.width = "500px";
  element.style.height = "300px";
  element.style.backgroundColor = "rgb(228, 231, 231)";
  element.style.margin = "3em 0";
  element.style.borderRadius = "2em";
};

document.addEventListener("DOMContentLoaded", fillMain);

// Stick NavBar

const nav = document.querySelector("nav");

const sticky = nav.offsetTop;

const stickNavBar = () => {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
