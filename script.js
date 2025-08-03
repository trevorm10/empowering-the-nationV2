document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const id = document.getElementById("id").value;
  const email = document.getElementById("email").value;
  const cell = document.getElementById("cell").value;

  const sixMonthCourses = Array.from(document.getElementById("sixMonthCourses").selectedOptions).map(option => option.value);
  const sixWeekCourses = Array.from(document.getElementById("sixWeekCourses").selectedOptions).map(option => option.value);

  const summaryDiv = document.getElementById("summary");
  summaryDiv.innerHTML = `
    <h3>Registration Summary</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Surname:</strong> ${surname}</p>
    <p><strong>ID Number:</strong> ${id}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Cell Number:</strong> ${cell}</p>
    <p><strong>6-Month Courses:</strong> ${sixMonthCourses.join(", ") || "None selected"}</p>
    <p><strong>6-Week Courses:</strong> ${sixWeekCourses.join(", ") || "None selected"}</p>
  `;
  summaryDiv.style.display = "block";
});

function clearForm() {
  document.getElementById("registrationForm").reset();
  document.getElementById("summary").style.display = "none";
}
