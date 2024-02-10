
document.addEventListener("DOMContentLoaded", () => {
    
    const editStudentModal = document.getElementById("editStudentModal");
    const sponsorEditModal = document.getElementById("sponsorEditBtn");

    const homiyBtn = document.getElementById("homiyBtn");


homiyBtn.addEventListener('click', () => {
    window.location.href = '../../pages/homiylar/homiylar.html';
})

    
    
    // editBtn.addEventListener("click", () => {
    //     if (editStudentModal && overlay) {
    //         editStudentModal.classList.toggle("hidden");
    //         overlay.classList.remove("hidden");
    //     }
    // });
    
    // closeModalBtn.addEventListener("click", () => {
    //     editStudentModal.classList.toggle("hidden");
    //     overlay.classList.add("hidden");
    // })
    
});

document.addEventListener('keydown', (e) => {
    if(e.key == 'Escape'){
        CloseModal()
    }
})
