document.getElementById("subscribeForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const interests = document.querySelectorAll(".interest:checked");
    const successMsg = document.getElementById("successMsg");

    // Check email contains @ and domain
    if (!email.includes("@") || !email.includes(".")) {
        alert("Email must contain @ and domain.");
        successMsg.textContent = "";
        return;
    }

    // Check at least one interest
    if (interests.length === 0) {
        alert("Please select at least one interest.");
        successMsg.textContent = "";
        return;
    }

    successMsg.textContent = "Subscription successful!";
});
