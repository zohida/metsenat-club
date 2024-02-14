const element = document.getElementById('tel');
        
        const maskOptions = {
          mask: '+{998}(00)000-00-00'
        };
        const mask = IMask(element, maskOptions);

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



const form = document.getElementById("sponsorAddForm");
const form3 = document.getElementById("editInfoForm");
const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const nameInput3 = document.getElementById("name3");
const amountInput3 = document.getElementById("amount3");
const amountInput2 = document.getElementById("amount2");
const form2 = document.getElementById("sponsorEditForm");
const nameInput2 = document.getElementById("name2");
const telInput2 = document.getElementById("tel");
const universityInput2 = document.getElementById("universiteti");




form.addEventListener("submit", function (event) {
  event.preventDefault();

  resetErrorMessages();

  let isValid = true;

  if (nameInput.value.trim() === "") {
    displayErrorMessage("msgName", "F.I.SHni to'liq kiriting!!!");
    isValid = false;
    return
  }

  if (amountInput.value.trim() === "") {
    displayErrorMessage("msgAmount", "To'lov miqdorini kiriting!!!");
    isValid = false;
    return
  }

  if (isValid) {
    const formValues = [
      nameInput.value.trim(),
      amountInput.value.trim(),
    ];

    localStorage.setItem("formValues", JSON.stringify(formValues));

    form.submit();
  }
});

form2.addEventListener("submit", function (event) {
  event.preventDefault();

  resetErrorMessages();

  let isValid = true;

  if (nameInput2.value.trim() === "") {
    displayErrorMessage("msgName2", "F.I.SHni to'liq kiriting!!!");
    isValid = false;
    return
  }

  if (telInput2.value.trim() === "") {
    displayErrorMessage("msgTel", "Telefoningizni to'liq kiriting!!!");
    isValid = false;
  }

  if (universityInput2.value.trim() === "") {
    displayErrorMessage("universityMsg", "Universitetingizni kiriting!!!");
    isValid = false;
  }
  
  if (amountInput2.value.trim() === "") {
    displayErrorMessage("msgAmount2", "To'lov miqdorini kiriting!!!");
    isValid = false;
    return
  }



  if (isValid) {
    const formValues = [
      nameInput2.value.trim(),
      amountInput2.value.trim(),
      universityInput2.value.trim(),
      telInput2.value.trim(),
    ];

    localStorage.setItem("formValues", JSON.stringify(formValues));

    form.submit();
  }
});


form3.addEventListener("submit", function (event) {
    event.preventDefault();
  
    resetErrorMessages();
  
    let isValid = true;
  
    if (nameInput3.value.trim() === "") {
      displayErrorMessage("msgName3", "F.I.SHni to'liq kiriting!!!");
      isValid = false;
      return
    }
  
    if (amountInput3.value.trim() === "") {
      displayErrorMessage("msgAmount3", "To'lov miqdorini kiriting!!!");
      isValid = false;
      return
    }
  
    if (isValid) {
      const formValues = [
        nameInput3.value.trim(),
        amountInput3.value.trim(),
      ];
  
      localStorage.setItem("formValues", JSON.stringify(formValues));
  
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
