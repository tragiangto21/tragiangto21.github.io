function checkStrength(){
    let pass = document.getElementById("password").value;
    let strength = document.getElementById("strength");

    if(pass.length < 4){
        strength.innerHTML = "Weak";
        strength.style.color = "red";
    }
    else if(pass.match(/[0-9]/) && pass.match(/[a-zA-Z]/)){
        strength.innerHTML = "Strong";
        strength.style.color = "green";
    }
    else{
        strength.innerHTML = "Medium";
        strength.style.color = "orange";
    }
}

function validateForm(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let file = document.getElementById("file").value;

    if(user.length < 5 || user.length > 15){
        alert("Username must be 5–15 characters");
        return false;
    }

    if(!(pass.match(/[0-9]/) && pass.match(/[a-zA-Z]/))){
        alert("Password must contain numbers and letters");
        return false;
    }

    if(!(file.endsWith(".jpg") || file.endsWith(".png"))){
        alert("Image must be JPG or PNG");
        return false;
    }

    return true;
}
