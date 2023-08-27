const form = document.querySelector('.sign-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const rememberCheckbox = document.querySelector('#checkbox');
const overlay = document.querySelector('.overlay');
const errorMessageElement = document.querySelector('#error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    localStorage.setItem('definedPassword', passwordInput.value);
    if (!nameInput.value || !emailInput.value || !passwordInput.value) {
        showError('You must fill all inputs.');
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        swal('Error', 'Passwords do not match. Please fix your password.', 'warning');
    } else if (!checkPassword(passwordInput.value)) {
        showError('Password should contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.');
    } else {
        swal('Good Job!', 'You have already an account', 'success');
    }
});

function checkPassword(str) {
    let re = /^(?=.*\d)(?=.*[!@#$%^&.*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}

function showError(message) {
    errorMessageElement.textContent = message;
    overlay.style.display = 'block';
}

function hideOverlay() {
    overlay.style.display = 'none';
}
