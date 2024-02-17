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

    showResult.addEventListener("click", () => {
        filterStudentModal.classList.toggle("hidden");
        overlay.classList.add("hidden");
    })



const modal = document.querySelector('.modal');
const filterOptions = document.querySelectorAll('.options .option');

filterBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

filterOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedOption = option.textContent;
        filterCards(selectedOption);
    });
});

function filterCards(option) {
    const cards = document.querySelectorAll('.table-card');
    cards.forEach(card => {
        const status = card.querySelector('.sponsor-status').textContent.trim();
        if (option === 'Barchasi' || status === option) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none'; 
        }
    });
}

});

clearBtnModal.addEventListener("click", () => {
    clearBtnModal.classList.remove("disabled");
    filterStudentModal.classList.toggle("hidden");
    overlay.classList.add("hidden");
})

