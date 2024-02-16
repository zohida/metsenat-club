const element = document.getElementById("tel");

const maskOptions = {
  mask: "+{998}(00)000-00-00",
};
const mask = IMask(element, maskOptions);

document.addEventListener("DOMContentLoaded", () => {
  const sponsorEditBtn = document.getElementById("sponsorEditBtn");
  const sponsorEditModal = document.getElementById("sponsorEditModal");
  const closeBtn = document.getElementById("closeBtn");

  const homiyBtn = document.getElementById("homiyBtn");

  homiyBtn.addEventListener("click", () => {
    window.location.href = "../../pages/homiylar/homiylar.html";
  });

  sponsorEditBtn.addEventListener("click", () => {
    if (sponsorEditModal && overlay) {
      sponsorEditModal.classList.toggle("hidden");
      overlay.classList.remove("hidden");
    }
  });

  closeBtn.addEventListener("click", () => {
    sponsorEditModal.classList.toggle("hidden");
    overlay.classList.add("hidden");
  });

  const form = document.getElementById("form-sponsor");
  const nameInput = document.getElementById("name");
  const telInput = document.getElementById("tel");
  const universityInput = document.getElementById("university");
  const studyDegreeInput = document.getElementById("amount1");
  const amountInput = document.getElementById("amount");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    resetErrorMessages();

    let isValid = true;

    if (nameInput.value.trim() === "") {
      displayErrorMessage("msgName", "F.I.SHni to'liq kiriting!!!");
      isValid = false;
      return
    }

    if (telInput.value.trim() === "") {
      displayErrorMessage("msgTel", "Telefoningizni to'liq kiriting!!!");
      isValid = false;
      return
    }

    if (universityInput.value.trim() === "") {
      displayErrorMessage("universityMsg", "Statusni kiriting!!!");
      isValid = false;
      return
    }

    if (studyDegreeInput.value.trim() === "") {
      displayErrorMessage("studyDegreeMsg", "Summma miqdorini kiriting!!!");
      isValid = false;
      return
    }

    if (amountInput.value.trim() === "") {
      displayErrorMessage("amountMsg", "To'lov turini tanlang!!!");
      isValid = false;
    }

    if (isValid) {
      const formValues = [
        nameInput.value.trim(),
        telInput.value.trim(),
        universityInput.value.trim(),
        studyDegreeInput.value.trim(),
        amountInput.value.trim(),
      ];

      // Save the form values array to localStorage
      localStorage.setItem("formValues", JSON.stringify(formValues));

      // Submit the form
      form.submit();
    }
  });

  function displayErrorMessage(id, message) {
    const errorText = document.getElementById(id);
    if (errorText) {
      errorText.textContent = message;
    }
  }

  function resetErrorMessages() {
    document.querySelectorAll(".error").forEach(function (errorText) {
     errorText.textContent = "";
    });
  }
});
