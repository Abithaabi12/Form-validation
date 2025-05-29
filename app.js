const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {
    // Prevent the form from submitting initially
           e.preventDefault(); 
    if (validateInputs()) {
        // If validation passes, you can submit the form here if needed, or handle submission via AJAX
        console.log("Form is valid, now you can submit");
    }
});

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success= true; // Flag to track if everything is valid

    // Username validation
    if (usernameVal === '') {
        setError(username, 'Username is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    // Email validation
    if (emailVal === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Please enter a valid email');
        isValid = false;
    } else {
        setSuccess(email);
    }

    // Password validation
    if (passwordVal === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (passwordVal.length < 8) {
        setError(password, 'Password must be at least 8 characters');
        isValid = false;
    } else {
        setSuccess(password);
    }

    // Confirm password validation
    if (cpasswordVal === '') {
        setError(cpassword, 'Confirm password is required');
        isValid = false;
    } else if (cpasswordVal !== passwordVal) {
        setError(cpassword, 'Passwords do not match');
        isValid = false;
    } else {
        setSuccess(cpassword);
    }

    return isValid;  // Return the overall result
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
};