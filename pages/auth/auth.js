document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;

    if (login === "" || password === "") {
        msg.innerText = "Loginingizni kiriting!!";
        msg1.innerText = "Parolingizni kiriting!!";
        return;
    }

    localStorage.setItem('login', login);
    localStorage.setItem('password', password);

    window.location.href = './../../about.html';
});