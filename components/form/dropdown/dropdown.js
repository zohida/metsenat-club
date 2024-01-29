const dropdownIcon = document.querySelector(".btn-dropdown");
const options = document.querySelector(".options");
const optionList = document.querySelectorAll(".option");
const selected = document.querySelector(".menu-text");


dropdownIcon.addEventListener("click", () => {
    options.style.display = (options.style.display === "block") ? "none" : "block";
    dropdownIcon.classList.toggle("rotate");
})

optionList.forEach(option => {
    option.addEventListener("click", () => {
        let selectedText = option.innerText;
        selected.innerHTML = selectedText;
        
        options.style.display="none";
        dropdownIcon.classList.remove("rotate");
    })

})