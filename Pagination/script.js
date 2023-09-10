const btn_left = document.querySelector(".btn-left");
const btn_right = document.querySelector(".btn-right");

const pages = document.querySelectorAll(".page-link");

let currentPage = 0;

const setCurrentPage = (pageNumber) => {
  pages[currentPage].classList.remove("page-link-current");
  pages[currentPage].style.color = "#343a40";

  pages[pageNumber].classList.add("page-link-current");
  pages[pageNumber].style.color = "white";
  currentPage = pageNumber;
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
  if (currentPage == 6) {
    return;
  }
  newPageNumber = currentPage + 1;
  setCurrentPage(newPageNumber);
};

btn_left.addEventListener("click", leftBtnHandler);
btn_right.addEventListener("click", rightBtnHandler);
