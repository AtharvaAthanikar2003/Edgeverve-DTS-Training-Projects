// Fetch patient data using AJAX (mock server data)
function fetchPatientData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true); // Mock API for demo
    xhr.onload = function () {
        if (xhr.status === 200) {
            const patients = JSON.parse(xhr.responseText);
            patients.forEach(patient => {
                const patientItem = document.createElement("li");
                patientItem.textContent = `${patient.name}, Email: ${patient.email}`;
                document.getElementById("patientList").appendChild(patientItem);
            });
        }
    };
    xhr.send();
}
fetchPatientData();