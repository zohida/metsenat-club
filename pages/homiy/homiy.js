const homiyBtn = document.getElementById("homiyBtn");
const sponsorEditModal = document.getElementById("sponsorEditBtn");


homiyBtn.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/pages/homiylar/homiylar.html';
})





document.addEventListener("DOMContentLoaded", () => {
    
    const editStudentModal = document.getElementById("editStudentModal");
    const homiyBtn = document.getElementById("homiyBtn");
    const sponsorEditModal = document.getElementById("sponsorEditBtn");


homiyBtn.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/pages/homiylar/homiylar.html';
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
