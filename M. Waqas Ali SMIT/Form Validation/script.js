function validateForm() {
    let valid = true;

    // Name Validation
    const name = document.getElementById('name').value;
    if (name === "") {
        document.getElementById('nameError').innerText = "Name is required";
        valid = false;
    } else {
        document.getElementById('nameError').innerText = "";
    }

    // Email Validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById('emailError').innerText = "Enter a valid email";
        valid = false;
    } else {
        document.getElementById('emailError').innerText = "";
    }

    // Phone Validation
    const phone = document.getElementById('phone').value;
    if (phone.length !== 10 || isNaN(phone)) {
        document.getElementById('phoneError').innerText = "Enter a valid 10-digit phone number";
        valid = false;
    } else {
        document.getElementById('phoneError').innerText = "";
    }

    // Date of Birth Validation
    const dob = document.getElementById('dob').value;
    if (dob === "") {
        document.getElementById('dobError').innerText = "Date of Birth is required";
        valid = false;
    } else {
        document.getElementById('dobError').innerText = "";
    }

    // Gender Validation
    const gender = document.getElementById('gender').value;
    if (gender === "") {
        document.getElementById('genderError').innerText = "Please select your gender";
        valid = false;
    } else {
        document.getElementById('genderError').innerText = "";
    }

    // Age Validation
    const age = document.getElementById('age').value;
    if (age < 1 || age > 120) {
        document.getElementById('ageError').innerText = "Enter a valid age between 1 and 120";
        valid = false;
    } else {
        document.getElementById('ageError').innerText = "";
    }

    // Password Validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = "Password must be at least 6 characters";
        valid = false;
    } else {
        document.getElementById('passwordError').innerText = "";
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').innerText = "Passwords do not match";
        valid = false;
    } else {
        document.getElementById('confirmPasswordError').innerText = "";
    }

    // Address Validation
    const address = document.getElementById('address').value;
    if (address === "") {
        document.getElementById('addressError').innerText = "Address is required";
        valid = false;
    } else {
        document.getElementById('addressError').innerText = "";
    }

    // City Validation
    const city = document.getElementById('city').value;
    if (city === "") {
        document.getElementById('cityError').innerText = "City is required";
        valid = false;
    } else {
        document.getElementById('cityError').innerText = "";
    }

    return valid;
}