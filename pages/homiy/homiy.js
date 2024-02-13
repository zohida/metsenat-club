
document.addEventListener("DOMContentLoaded", () => {
    
    const sponsorEditBtn = document.getElementById("sponsorEditBtn");
    const sponsorEditModal = document.getElementById("sponsorEditModal");
    const closeBtn = document.getElementById("closeBtn");


    const homiyBtn = document.getElementById("homiyBtn");


homiyBtn.addEventListener('click', () => {
    window.location.href = '../../pages/homiylar/homiylar.html';
})

    
    
    sponsorEditBtn.addEventListener("click", () => {
        if (sponsorEditModal && overlay) {
            sponsorEditModal.classList.toggle("hidden");
            overlay.classList.remove("hidden");
        }
    });
    
    closeBtn.addEventListener("click", () => {
        sponsorEditModal.classList.toggle("hidden");
        overlay.classList.add("hidden");
    })
    
});

document.addEventListener('keydown', (e) => {
    if(e.key == 'Escape'){
        CloseModal()
    }
})
