const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");
const menuList = document.getElementById("menuList");


menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
})

overlay.addEventListener("click", () => {
    menuList.classList.add("hidden");
    overlay.classList.add("hidden");
});
