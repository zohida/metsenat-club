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

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Reset error messages
        resetErrorMessages();

        // Validate inputs
        let isValid = true;

        if (nameInput.value.trim() === '') {
            displayErrorMessage('msgName');
            isValid = false;
        }

        // Validate other inputs similarly
        // Add your validation logic here

        // If all inputs are valid, submit the form
        if (isValid) {
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
        document.querySelectorAll('.msg').forEach(function(msgElement) {
            msgElement.textContent = '';
        });
    }
    