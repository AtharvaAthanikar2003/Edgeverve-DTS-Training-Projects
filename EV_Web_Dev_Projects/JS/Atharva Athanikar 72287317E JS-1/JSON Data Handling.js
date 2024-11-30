// Parse and display data from localStorage
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
// Save patient data to localStorage as a JSON string
function savePatientData(newPatient) {
  const patients = localStorage.getItem("patients") ? JSON.parse(localStorage.getItem("patients")) : [];
  patients.push(newPatient);
  localStorage.setItem("patients", JSON.stringify(patients)); 
}