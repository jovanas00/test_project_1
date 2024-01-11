localStorage.setItem('isLogedIn', 'false');
localStorage.setItem('email', 'olivia@untitledui.com');
localStorage.setItem('password', 'olivia123');

const logInBtn = document.querySelector('.log-in');
logInBtn.addEventListener('click', function() {
    check();
})

function check() {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const isLogedIn = localStorage.getItem('isLogedIn');

    const userEmail = document.querySelector('.user-email');
    const userPassword = document.querySelector('.user-password');

    if(userEmail.value !== storedEmail || userPassword.value !== storedPassword) {
        alert("Netacni podaci");
    }
    else if(isLogedIn === 'true'){
        alert("Vec ste ulogovani!");
    }
    else
    {
        document.querySelector('.user-email').value = "";
        document.querySelector('.user-password').value = "";
        localStorage.setItem('isLogedIn', 'true');
        window.location = 'index.html';
    }
}