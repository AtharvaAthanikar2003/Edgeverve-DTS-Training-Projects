// Validate form input using regex
function validateForm(name, email) {
    const nameRegex = /^[A-Za-z ]{3,}$/; 
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    if (!nameRegex.test(name)) {
        alert("Invalid name. Please enter a valid name.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Invalid email. Please enter a valid email address.");
        return false;
    }
    return true;
}
document.getElementById("patientForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (validateForm(name, email)) {
    }
});