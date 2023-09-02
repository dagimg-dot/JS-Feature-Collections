const add_btn = document.querySelector("button");

const addFieldHandler = () => {
  const fields = [];
  const element = createElement("input");
  applyStyle(element);
  appendToNode(element, ".field");
  fields.push(element);
};

const appendToNode = (element, className) => {
  const parent = document.querySelector(className);
  parent.appendChild(element);
};

const createElement = (tagName) => {
  const element = document.createElement(tagName);
  return element;
};

const applyStyle = (element) => {
  element.style.backgroundColor = "blue";
  element.style.padding = "1em";
  element.style.borderRadius = "1em";
  element.style.backgroundColor = "rgb(223, 217, 217)";
  element.style.color = "blueviolet";
  element.style.fontSize = "medium";
  element.style.marginBottom = "1em";
};

add_btn.addEventListener("click", addFieldHandler);
