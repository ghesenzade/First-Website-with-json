const form = document.querySelector('.login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const rememberCheckbox = document.querySelector('#checkbox');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const definedPassword = localStorage.getItem('definedPassword');
    if (!emailInput.value || !passwordInput.value) {
        alert('You must fill all inputs.');
    }else if (passwordInput.value === definedPassword) {
        swal("Good job!", "You are logged in to your account", "success");
    } else {
        swal("Error!", "Incorrect password", "warning");
    }
});
