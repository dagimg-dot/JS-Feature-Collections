const btn_left = document.querySelector(".btn-left");
const btn_right = document.querySelector(".btn-right");
const content = document.querySelector(".content");

const pages = document.querySelectorAll(".page-link");

let currentPage = 0;

const setCurrentPage = (pageNumber) => {
  pages[currentPage].classList.remove("page-link-current");
  //   pages[currentPage].style.color = "#343a40";

  pages[pageNumber].classList.add("page-link-current");
  //   pages[pageNumber].style.color = "white";
  currentPage = pageNumber;
  content.innerHTML = currentPage + 1;
};

setCurrentPage(0);

leftBtnHandler = () => {
  if (currentPage == 0) {
    return;
  }
  newPageNumber = currentPage - 1;
  setCurrentPage(newPageNumber);
};

rightBtnHandler = () => {
  if (currentPage == pages.length - 1) {
    return;
  }
  newPageNumber = currentPage + 1;
  setCurrentPage(newPageNumber);
};

pages.forEach((page) => {
  page.addEventListener("click", () => {
    setCurrentPage(Number(page.innerText) - 1);
  });
});

btn_left.addEventListener("click", leftBtnHandler);
btn_right.addEventListener("click", rightBtnHandler);
