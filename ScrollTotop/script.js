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

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.addEventListener("DOMContentLoaded", fillMain);

const top_btn = document.querySelector(".to-top");
top_btn.addEventListener("click", scrollToTop);

// Stick NavBar

const nav = document.querySelector("nav");

const sticky = nav.offsetTop;

const stickNavBar = () => {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
    top_btn.classList.add("sticky-totop");
  } else {
    nav.classList.remove("sticky");
    top_btn.classList.remove("sticky-totop");
  }
};
