const studentExitBtn = document.getElementById("studentExitBtn");
const studentAddBtn = document.getElementById("studentAddBtn");
const formStudent = document.getElementById("formStudent");
const studentCard = document.getElementById("studentCard");


studentExitBtn.addEventListener('click', () => {
    window.location.href = '../../pages/talabalar/talabalar.html';
});


const form = document.getElementById('formStudent');
    const nameInput = document.getElementById('student-name');
    const telInput = document.getElementById('tel');
    const universityInput = document.getElementById('university');
    const studyDegreeInput = document.getElementById('studyDegree');
    const amountInput = document.getElementById('amount');

    const element = document.getElementById('tel');
        
        const maskOptions = {
          mask: '+{998}(00)000-00-00'
        };
        const mask = IMask(element, maskOptions);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Reset error messages
        resetErrorMessages();

        // Validate inputs
        let isValid = true;

        if (nameInput.value.trim() === '') {
            displayErrorMessage('msgName', "F.I.SHni to'liq kiriting!!!");
            isValid = false;
            return
        }

        if (telInput.value.trim() === '') {
            displayErrorMessage('msgTel', "Telefoningizni to'liq kiriting!!!");
            isValid = false;
            return
        }

        if (universityInput.value.trim() === '') {
            displayErrorMessage('universityMsg', "Universitetingizni to'liq kiriting!!!");
            isValid = false;
            return
        }

        if (studyDegreeInput.value.trim() === '') {
            displayErrorMessage('studyDegreeMsg', "Talabalik turini kiriting!!!");
            isValid = false;
            return
        }

        if (amountInput.value.trim() === '') {
            displayErrorMessage('amountMsg', "Miqdorni kiriting!!!");
            isValid = false;
            return
        }

        

        if (isValid) {
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
        document.querySelectorAll('.msg').forEach(function(msgElement) {
            msgElement.textContent = '';
        });
    }
    