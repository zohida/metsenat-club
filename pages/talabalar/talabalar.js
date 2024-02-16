document.addEventListener("DOMContentLoaded", () => {
  const filterBtnStudent = document.getElementById("filterBtn");
  const filterStudentModal = document.getElementById("filterStudentModal");
  const overlay = document.getElementById("overlay");
  const closeModalBtn = document.getElementById("closeModalBtn");

  filterBtnStudent.addEventListener("click", () => {
    if (filterStudentModal && overlay) {
      filterStudentModal.classList.toggle("hidden");
      overlay.classList.remove("hidden");
    }
  });

  closeModalBtn.addEventListener("click", () => {
    filterStudentModal.classList.toggle("hidden");
    overlay.classList.add("hidden");
  });
});

showResult.addEventListener("click", () => {
  filterStudentModal.classList.toggle("hidden");
  overlay.classList.add("hidden");
});

const form = document.getElementById("filterStudentForm");
const typeInput = document.getElementById("type");
const universityInput = document.getElementById("university");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  resetErrorMessages();

  let isValid = true;

  if (typeInput.value.trim() === "") {
    displayErrorMessage("msgType", "darajangizni yozing!!!");
    isValid = false;
  }

  if (universityInput.value.trim() === "") {
    displayErrorMessage("msgUniversity", "Universitetingizni kiriting!!!");
    isValid = false;
  }

  if (isValid) {
    const formValues = [typeInput.value.trim(), universityInput.value.trim()];

    // Save the form values array to localStorage
    localStorage.setItem("formValues", JSON.stringify(formValues));

    // Submit the form
    form.submit();
  }
});

function displayErrorMessage(id, message) {
  const msgElement = document.getElementById(id);
  if (msgElement) {
    msgElement.textContent = message;
  }
}

function resetErrorMessages() {
  document.querySelectorAll(".msg").forEach(function (msgElement) {
    msgElement.textContent = "";
  });
}

clearBtn.addEventListener("click", () => {
  filterStudentModal.classList.toggle("hidden");
  overlay.classList.add("hidden");
  typeInput.value = ""; // Clear type input
  universityInput.value = ""; // Clear university input
  modal.classList.add("hidden");
});

// Function to filter cards based on type and university inputs
function filterCards() {
  const typeFilter = typeInput.value.trim().toLowerCase();
  const universityFilter = universityInput.value.trim().toLowerCase();

  const homiyCards = document.querySelectorAll(".table-card");
  homiyCards.forEach((card) => {
    const cardType = card
      .querySelector(".student-degree")
      .textContent.trim()
      .toLowerCase();
    const cardUniversity = card
      .querySelector(".student-univer")
      .textContent.trim()
      .toLowerCase();

    const typeMatch = typeFilter === "" || cardType.includes(typeFilter);
    const universityMatch =
      universityFilter === "" || cardUniversity.includes(universityFilter);

    if (typeMatch && universityMatch) {
      card.style.display = "flex"; // Show the card
    } else {
      card.style.display = "none"; // Hide the card
    }
  });
}

// Event listeners for input events on type and university inputs
typeInput.addEventListener("input", filterCards);
universityInput.addEventListener("input", filterCards);
