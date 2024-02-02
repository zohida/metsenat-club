document.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.getElementById("filterBtn");
    const filterStudentModal = document.getElementById("filterStudentModal");
    const overlay = document.getElementById("overlay");
    const closeModalBtn = document.getElementById("closeModalBtn");


    filterBtn.addEventListener("click", () => {
        if (filterStudentModal && overlay) {
            filterStudentModal.classList.toggle("hidden");
            overlay.classList.remove("hidden");
        }
    });

    closeModalBtn.addEventListener("click", () => {
        filterStudentModal.classList.toggle("hidden");
        overlay.classList.add("hidden");
    })
});