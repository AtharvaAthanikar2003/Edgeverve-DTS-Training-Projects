// Save patient data to localStorage
function savePatientData(newPatient) {
    const patients = localStorage.getItem("patients") ? JSON.parse(localStorage.getItem("patients")) : [];
    patients.push(newPatient);
    localStorage.setItem("patients", JSON.stringify(patients));
}
displayPatients();