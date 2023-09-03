const add_btn = document.querySelector("#add");
const delete_btn = document.querySelector("#delete");

const addFieldHandler = () => {
  const div = createElement("div");
  const input = createElement("input");
  applyStyle(input);
  appendToNode({
    children: [input],
    directParent: div,
    mainParent: ".field",
  });
};

const deleteFieldHandler = () => {
  const field = document.querySelector(".field");
  const fieldDivs = document.querySelectorAll(".field > div");
  if (fieldDivs.length > 0) {
    field.removeChild(fieldDivs[fieldDivs.length - 1]);
  }
};

const appendToNode = ({ children, directParent, mainParent }) => {
  const parent = document.querySelector(mainParent);
  for (let i = 0; i < children.length; i++) {
    directParent.appendChild(children[i]);
  }
  parent.appendChild(directParent);
};

const createElement = (tagName) => {
  const element = document.createElement(tagName);
  return element;
};

const applyStyle = (element) => {
  element.style.width = "100%";
  element.style.backgroundColor = "rgb(223, 217, 217)";
  element.style.padding = "1em";
  element.style.borderRadius = "1em";
  element.style.color = "blueviolet";
  element.style.fontSize = "medium";
  element.style.marginBottom = "1em";
};

add_btn.addEventListener("click", addFieldHandler);
delete_btn.addEventListener("click", deleteFieldHandler);
