const username = document.getElementById("username");
const password = document.getElementById("password");
const profilePic = document.getElementById("profilePic");

const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const imageError = document.getElementById("imageError");
const strengthIndicator = document.getElementById("strengthIndicator");

password.addEventListener("input", checkPasswordStrength);

document.getElementById("registerForm").addEventListener("submit", function (e) {
    let valid = true;

    // Username validation (5–15 characters)
    if (username.value.length < 5 || username.value.length > 15) {
        usernameError.textContent = "Username must be 5-15 characters";
        valid = false;
    } else {
        usernameError.textContent = "";
    }

    // Password validation (letters + numbers)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
    if (!passwordRegex.test(password.value)) {
        passwordError.textContent = "Password must contain letters and numbers";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    // Image validation (JPG / PNG)
    const file = profilePic.files[0];
    if (file) {
        const allowedTypes = ["image/jpeg", "image/png"];
        if (!allowedTypes.includes(file.type)) {
            imageError.textContent = "Image must be JPG or PNG";
            valid = false;
        } else {
            imageError.textContent = "";
        }
    }

    if (!valid) {
        e.preventDefault();
    }
});

function checkPasswordStrength() {
    const value = password.value;
    let strength = "";

    if (value.length < 6) {
        strength = "Weak";
        strengthIndicator.style.color = "red";
    } else if (value.match(/[A-Za-z]/) && value.match(/\d/)) {
        strength = "Medium";
        strengthIndicator.style.color = "orange";
    }

    if (value.length >= 8 && value.match(/[A-Za-z]/) && value.match(/\d/)) {
        strength = "Strong";
        strengthIndicator.style.color = "green";
    }

    strengthIndicator.textContent = strength;
}
