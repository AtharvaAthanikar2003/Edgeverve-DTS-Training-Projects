function showNotification(message) {
  if (Notification.permission === "granted") {
      new Notification(message);
  } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
          if (permission === "granted") {
              new Notification(message);
          }
      });
  }
}
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const li = document.createElement('li');
  li.textContent = `${name}, Age: ${age}, Email: ${email}`;
  patientList.appendChild(li);
  showNotification("Patient added successfully!");
  form.reset();
});