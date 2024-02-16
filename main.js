

document.getElementById('auth-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const login = document.getElementById('login').value;
    const password = document.getElementById('parol').value;
    const parolMsg = document.getElementById('parol-msg');
    const loginMsg = document.getElementById('login-msg');

    

    if (login === "" || password === "") {
        loginMsg.innerText = "Loginingizni kiriting!!";
        parolMsg.innerText = "Parolingizni kiriting!!";
        return;
    }

    localStorage.setItem('login', login);
    localStorage.setItem('password', password);

    window.location.href = './pages/dashboard/dashboard.html';
});