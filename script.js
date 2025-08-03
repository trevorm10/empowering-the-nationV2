const courseLink = document.querySelector('a[href="course-summary.html"]');
if (courseLink) {
  courseLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "course-summary.html";
  });
}

