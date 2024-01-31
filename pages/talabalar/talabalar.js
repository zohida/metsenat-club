document.addEventListener("DOMContentLoaded", () => {
    const filterBtnStudent = document.getElementById("filterBtnStudent");
    const filterStudentModal = document.getElementById("filterStudentModal");
    const overlay = document.getElementById("overlay");

    filterBtnStudent.addEventListener("click", () => {
        if (filterStudentModal && overlay) {
            filterStudentModal.classList.toggle("hidden");
            overlay.classList.remove("hidden");
        }
    });
});