document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const successMsg = document.getElementById("successMsg");

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        successMsg.textContent = "";
    } else {
        successMsg.textContent = "Form submitted successfully!";
    }
});
