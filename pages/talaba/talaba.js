

document.addEventListener("DOMContentLoaded", () => {

    const editBtn = document.getElementById("editBtn");
    const editStudentModal = document.getElementById("editStudentModal");
    const overlay = document.getElementById("overlay");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const studentExitBtn = document.getElementById("studentExitBtn");
    const sponsorEdit = document.getElementById("sponsorEdit");
    const deleteBtn = document.getElementById("deleteBtn");
    const sponsorDeleteBtn = document.getElementById("sponsorDeleteBtn");
    const sponsorAddBtn = document.getElementById("sponsorAddBtn");
    const sponsorAddBtn2 = document.getElementById("sponsorAddBtn2");
    const addSponsorModal = document.getElementById("addSponsorModal");
    const sponsorEditModal = document.getElementById("SponsorEditModal");


studentExitBtn.addEventListener('click', () => {
    window.location.href = '../../pages/talabalar/talabalar.html';
})

editBtn.addEventListener("click", () => {
    if (editStudentModal && overlay) {
        editStudentModal.classList.toggle("hidden");
        overlay.classList.remove("hidden");
    }
});

sponsorAddBtn.addEventListener("click", () => {
    if (addSponsorModal && overlay) {
        addSponsorModal.classList.toggle("hidden");
        overlay.classList.remove("hidden");
    }
});

sponsorAddBtn2.addEventListener("click", () => {
    if (addSponsorModal && overlay) {
        addSponsorModal.classList.toggle("hidden");
        overlay.classList.remove("hidden");
    }
});

sponsorEdit.addEventListener("click", () => {
    if (sponsorEditModal && overlay) {
        sponsorEditModal.classList.toggle("hidden");
        overlay.classList.remove("hidden");
    }
});

    closeModalBtn.addEventListener("click", () => {
        editStudentModal.classList.toggle("hidden");
        overlay.classList.add("hidden");
    })

   deleteBtn.addEventListener("click", () => {
        sponsorEditModal.classList.toggle("hidden");
        overlay.classList.add("hidden");
    })

    sponsorDeleteBtn.addEventListener("click", () => {
        addSponsorModal.classList.toggle("hidden");
        overlay.classList.add("hidden");
    })
});

document.addEventListener('keydown', (e) => {
    if(e.key == 'Escape'){
        closeModal()
    }
})



const formStudent = document.getElementById("modalEditStudent");

formStudent.addEventListener("submit", (e) => {
    e.preventDefault();

    formStudent.reset();
})