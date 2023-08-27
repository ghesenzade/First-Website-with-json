document.querySelector('.forgot-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const sendCodeCheckbox = document.querySelector('#checkbox');

    if (sendCodeCheckbox.checked) {
        swal(`Please check your email`);
    } else {
        swal(`Please allow us to send you a code.`, );
    }
});