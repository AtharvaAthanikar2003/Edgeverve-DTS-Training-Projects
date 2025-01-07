// Display patients from localStorage
function displayPatients() {
    const patients = localStorage.getItem("patients") ? JSON.parse(localStorage.getItem("patients")) : [];
    const patientList = document.getElementById("patientList");
    patientList.innerHTML = "";
    patients.forEach(patient => {
        const patientItem = document.createElement("li");
        patientItem.textContent = `${patient.name}, Age: ${patient.age}, Email: ${patient.email}`;
        patientList.appendChild(patientItem);
    });
}
document.getElementById("patientForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    savePatientData({ name, age, email });
    displayPatients();  
});