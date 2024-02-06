const paginationIcon = document.getElementById("paginationIcon");
const selectList = document.getElementById("selectList");
const selectNum = document.getElementById("selectNum");
const selectItem = document.querySelectorAll('.select-item');


paginationIcon.addEventListener("click", () => {
    selectList.classList.toggle("hidden");
})

selectItem.forEach((item) => {
   item.addEventListener("click", () => {
    let text = item.innerText;
    selectNum.innerText = text;
  
    selectList.classList.toggle("hidden");
   })
})

let currentPage = 10;